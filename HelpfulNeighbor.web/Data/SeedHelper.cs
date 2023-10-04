using Bogus;
using HelpfulNeighbor.web.Features.Authorization;
using HelpfulNeighbor.web.Features.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace HelpfulNeighbor.web.Data
{
    public class SeedHelper
    {
        private readonly DataContext _context;

        public SeedHelper(DataContext context)
        {
            _context = context;
        }

        public static async Task Something(IServiceProvider provider)
        {
            var context = provider.GetService<DataContext>();
            var userManager = provider.GetService<UserManager<User>>();
            var roleManager = provider.GetService<RoleManager<Role>>();
            Faker<User> faker = new();

            faker.RuleFor(x => x.UserName, f => f.Internet.UserName());
            faker.RuleFor(x => x.FirstName, f => f.Person.FirstName);
            faker.RuleFor(x => x.LastName, f => f.Person.LastName);
            faker.RuleFor(x => x.Email, f => f.Person.Email);
            faker.RuleFor(x => x.SecurityStamp, "porjfioereriofj");
            var list = faker.Generate(5);

            if (!roleManager.Roles.Any(x => x.Name.Equals("Admin")))
            {
                Role role = new()
                {
                    Name = "Admin"
                };
                await roleManager.CreateAsync(role);
            }

            if (!roleManager.Roles.Any(x => x.Name.Equals("Basic")))
            {
                Role role = new()
                {
                    Name = "Basic"
                };
                await roleManager.CreateAsync(role);
            }

            foreach (var user in list)
            {
                Random random = new();
                int randomNumber = random.Next(0, 10);


                var result = await userManager.CreateAsync(user, "SomePassword234!");
                await context.SaveChangesAsync();

                User? newUser = await userManager.FindByEmailAsync(user.Email);

                string role = randomNumber > 5 ? "Admin" : "Basic";

                await userManager.AddToRoleAsync(newUser, role);
                await context.SaveChangesAsync();

            }
        }

        public void SeedDataFromJson(List<string> jsonFilePaths)
        {
            try
            {
                foreach (var jsonFilePath in jsonFilePaths)
                {
                    var jsonData = File.ReadAllText(jsonFilePath);

                    var items = JsonConvert.DeserializeObject<List<object>>(jsonData);

                    if (items != null && items.Any())
                    {
                        // Determine the type of objects in the list
                        // and add them to the appropriate DbSet
                        if (items.First() is Location)
                        {
                            _context.Locations.AddRange(items.Cast<Location>());
                        }
                        else if (items.First() is Resource)
                        {
                            _context.Resources.AddRange(items.Cast<Resource>());
                        }
                        else if (items.First() is Shelter)
                        {
                            _context.Shelters.AddRange(items.Cast<Shelter>());
                        }
                        else if (items.First() is HoursOfOperation)
                        {
                            _context.HoursOfOperations.AddRange(items.Cast<HoursOfOperation>());
                        }
                        else
                        {
                            Console.WriteLine($"Unsupported JSON data type in {jsonFilePath}");
                        }
                    }
                    else
                    {
                        Console.WriteLine($"No data found in {jsonFilePath}");
                    }
                }

                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }
        }
    }
}


