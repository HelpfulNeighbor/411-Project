using Bogus;
using HelpfulNeighbor.web.Features.Authorization;
using HelpfulNeighbor.web.Features.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

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
                if (!_context.Locations.Any())
                {
                    await SeedDataFromJsonFile<Location>("Location.json", "Locations");
                }

                if (!_context.Resources.Any())
                {
                    await SeedDataFromJsonFile<Resource>("Resource.json", "Resources");
                }

                if (!_context.Shelters.Any())
                {
                    await SeedDataFromJsonFile<Shelter>("Shelter.json", "Shelters");
                }

                if (!_context.HoursOfOperations.Any())
                {
                    // Pass null resourceId as there's no associated Resource yet
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
                _logger.LogInformation($"Reading data from {jsonFilePath}");
                var jsonData = File.ReadAllText(jsonFilePath);

                // Modify this to match your data models
                var items = JsonConvert.DeserializeObject<List<TEntity>>(jsonData);

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

                        // Use migrationBuilder.Sql() to insert data
                        var insertSql = GenerateInsertSql(item, tableName); // Pass tableName
                        _context.Database.ExecuteSqlRaw(insertSql);
                    }
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


        private string GenerateInsertSql<TEntity>(TEntity entity, string tableName) where TEntity : class
        {
            var properties = typeof(TEntity).GetProperties();
            var columns = new List<string>();
            var values = new List<string>();

            foreach (var property in properties)
            {
                // Check if the property is marked as an identity column
                var isIdentity = property.GetCustomAttributes(typeof(DatabaseGeneratedAttribute), true)
                    .Any(attr => ((DatabaseGeneratedAttribute)attr).DatabaseGeneratedOption == DatabaseGeneratedOption.Identity);

                var propertyValue = property.GetValue(entity);

                // If it's not an identity column, not a navigation property, and not null
                if (!isIdentity && !property.PropertyType.IsClass)
                {
                    var value = SqlEncodeValue(propertyValue);
                    values.Add(value == null ? "NULL" : value);
                    columns.Add(property.Name);
                }
            }

            var columnsSql = string.Join(", ", columns);
            var valuesSql = string.Join(", ", values);

            return $"INSERT INTO {tableName} ({columnsSql}) VALUES ({valuesSql});";
        }



        private string SqlEncodeValue(object value)
        {
            if (value == null)
            {
                return "NULL";
            }

            if (value is string || value is DateTime)
            {
                return $"'{value}'";
            }

            return value.ToString();
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



