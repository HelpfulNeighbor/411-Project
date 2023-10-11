using Bogus;
using HelpfulNeighbor.web.Features.Authorization;
using HelpfulNeighbor.web.Features.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace HelpfulNeighbor.web.Data
{
    public class SeedHelper
    {
        private readonly DataContext _context;
        private readonly ILogger<SeedHelper> _logger;

        public SeedHelper(DataContext context, ILogger<SeedHelper> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task SeedDataFromJsonIfEmpty(List<string> jsonFilePaths)
        {
            try
            {

                if (!_context.Resources.Any())
                {
                    await SeedDataFromJsonFile<Resource>("Resource.json", "Resources");
                }

                if (!_context.HoursOfOperations.Any())
                {
                    await SeedDataFromJsonFile<HoursOfOperation>("HoursOfOperation.json", "HoursOfOperations");
                }

                _logger.LogInformation("Data seeding completed successfully."); 
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error: {ex.Message}");
                throw;
            }
        }

        private async Task SeedDataFromJsonFile<TEntity>(string jsonFileName, string tableName, int? resourceId = null) where TEntity : class
        {
            try
            {
                var jsonFilePath = Path.Combine("Data", "DataObjects", jsonFileName);
                var jsonData = File.ReadAllText(jsonFilePath);
                _logger.LogInformation($"Reading data from {jsonFilePath}");

                var items = JArray.Parse(jsonData).ToObject<List<TEntity>>();


                if (items != null && items.Any())
                {
                    foreach (var item in items)
                    {
                        if (resourceId != null)
                        {
                            var property = item.GetType().GetProperty("ResourceId");
                            if (property != null)
                            {
                                property.SetValue(item, resourceId.Value);
                            }
                        }
                        SetDefaultValuesForStringProperties(item);
                        await _context.Set<TEntity>().AddAsync(item);
                    }

                    await _context.SaveChangesAsync();
                    /*foreach (var item in items)
                    {
                        _logger.LogInformation($"Entity after deserialization and saving: {JsonConvert.SerializeObject(item)}");
                    }*/
                }
                else
                {
                    _logger.LogWarning($"No data found in {jsonFilePath}");
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error: {ex.Message}");
                throw;
            }
        }

        private void SetDefaultValuesForStringProperties<TEntity>(TEntity entity) where TEntity : class
        {
            var properties = typeof(TEntity).GetProperties();

            foreach (var property in properties)
            {
                if (property.PropertyType == typeof(string))
                {
                    var propertyValue = property.GetValue(entity) as string;

                    if (string.IsNullOrWhiteSpace(propertyValue))
                    {
                        property.SetValue(entity, "N/A");
                    }
                }
            }
        }

        public static async Task Something(IServiceProvider provider)
        {
            var context = provider.GetService<DataContext>();
            var userManager = provider.GetService<UserManager<User>>();
            var roleManager = provider.GetService<RoleManager<Role>>();
            var faker = new Faker<User>();

            faker.RuleFor(x => x.UserName, f => f.Internet.UserName());
            faker.RuleFor(x => x.FirstName, f => f.Person.FirstName);
            faker.RuleFor(x => x.LastName, f => f.Person.LastName);
            faker.RuleFor(x => x.Email, f => f.Person.Email);
            faker.RuleFor(x => x.SecurityStamp, "porjfioereriofj");
            var list = faker.Generate(5);

            if (!await roleManager.RoleExistsAsync("Admin"))
            {
                var role = new Role
                {
                    Name = "Admin"
                };
                await roleManager.CreateAsync(role);
            }

            if (!await roleManager.RoleExistsAsync("Basic"))
            {
                var role = new Role
                {
                    Name = "Basic"
                };
                await roleManager.CreateAsync(role);
            }

            foreach (var user in list)
            {
                var random = new Random();
                var randomNumber = random.Next(0, 10);

                var result = await userManager.CreateAsync(user, "SomePassword234!");
                await context.SaveChangesAsync();

                var newUser = await userManager.FindByEmailAsync(user.Email);

                var role = randomNumber > 5 ? "Admin" : "Basic";

                await userManager.AddToRoleAsync(newUser, role);
                await context.SaveChangesAsync();
            }
        }
    }
}



