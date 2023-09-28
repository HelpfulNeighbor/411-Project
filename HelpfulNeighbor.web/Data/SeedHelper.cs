using Bogus;
using HelpfulNeighbor.web.Features.Authorization;
using HelpfulNeighbor.web.Features.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace HelpfulNeighbor.web.Data
{
    public static class SeedHelper
    {
        /*  public static async Task MigrateAndSeed(IServiceProvider serviceProvider)
          {
              var dataContext = serviceProvider.GetRequiredService<DataContext>();

              await dataContext.Database.MigrateAsync();

              await AddRoles(serviceProvider);
              await AddUsers(serviceProvider);

              if (!dataContext.Users.Any())
              {
                  // Create Roles if they don't exist
                  var role1 = dataContext.Roles.FirstOrDefault(r => r.Name == "Admin") ?? new Role
                  {
                      Name = "Admin"
                  };

                  var role2 = dataContext.Roles.FirstOrDefault(r => r.Name == "User") ?? new Role
                  {
                      Name = "User"
                  };

                  // Create Users if they don't exist
                  var user1 = dataContext.Users.FirstOrDefault(u => u.UserName == "admin") ?? new User
                  {
                      UserName = "admin",
                      Password = "admin123",
                      Email = "admin@example.com",
                      FirstName = "Admin",
                      LastName = "User",
                      Roles = new List<UserRole> { new UserRole { Role = role1 } },
                      CurrentLocation = new UserCurrentLocation { Location = CreateOrGetLocation(40.7128m, -74.0060m), Timestamp = DateTime.Now }
                  };

                  var user2 = dataContext.Users.FirstOrDefault(u => u.UserName == "user") ?? new User
                  {
                      UserName = "user",
                      Password = "user123",
                      Email = "user@example.com",
                      FirstName = "Regular",
                      LastName = "User",
                      Roles = new List<UserRole> { new UserRole { Role = role2 } },
                      CurrentLocation = new UserCurrentLocation { Location = CreateOrGetLocation(34.0522m, -118.2437m), Timestamp = DateTime.Now }
                  };

                  // Create Resources if they don't exist
                  var resource1 = dataContext.Resources.FirstOrDefault(r => r.Name == "Resource 1") ?? new Resource
                  {
                      Name = "Resource 1",
                      City = "New York",
                      Address = "123 Main St",
                      PhoneNumber = "123-456-7890",
                      Website = "https://example.com/resource1",
                      ResourceType = "Type 1",
                      Location = CreateOrGetLocation(40.7128m, -74.0060m)
                  };

                  var resource2 = dataContext.Resources.FirstOrDefault(r => r.Name == "Resource 2") ?? new Resource
                  {
                      Name = "Resource 2",
                      City = "Los Angeles",
                      Address = "456 Elm St",
                      PhoneNumber = "987-654-3210",
                      Website = "https://example.com/resource2",
                      ResourceType = "Type 2",
                      Location = CreateOrGetLocation(34.0522m, -118.2437m)
                  };

                  // Create Shelters if they don't exist
                  var shelter1 = dataContext.Shelters.FirstOrDefault(s => s.Name == "Shelter 1") ?? new Shelter
                  {
                      Name = "Shelter 1",
                      City = "New York",
                      Address = "789 Oak St",
                      ShelterType = "Type A",
                      PhoneNumber = "555-123-4567",
                      Website = "https://example.com/shelter1",
                      ResourceType = "Type 3",
                      Location = CreateOrGetLocation(40.7128m, -74.0060m)
                  };

                  var shelter2 = dataContext.Shelters.FirstOrDefault(s => s.Name == "Shelter 2") ?? new Shelter
                  {
                      Name = "Shelter 2",
                      City = "Los Angeles",
                      Address = "101 Pine St",
                      ShelterType = "Type B",
                      PhoneNumber = "555-987-6543",
                      Website = "https://example.com/shelter2",
                      ResourceType = "Type 4",
                      Location = CreateOrGetLocation(34.0522m, -118.2437m)
                  };

                  dataContext.SaveChanges();
              }
          }

          private Location CreateOrGetLocation(decimal latitude, decimal longitude)
          {
              var existingLocation = dataContext.Locations.FirstOrDefault(l => l.Latitude == latitude && l.Longitude == longitude);
              if (existingLocation != null)
              {
                  return existingLocation;
              }

              var newLocation = new Location
              {
                  Latitude = latitude,
                  Longitude = longitude
              };

              dataContext.Locations.Add(newLocation);
              dataContext.SaveChanges();

              return newLocation;
          }

      } */

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


                var result =  await userManager.CreateAsync(user, "SomePassword234!");
                await context.SaveChangesAsync();

                User? newUser = await userManager.FindByEmailAsync(user.Email);

                string role = randomNumber > 5 ? "Admin" : "Basic";

                await userManager.AddToRoleAsync(newUser, role);
                await context.SaveChangesAsync();

            }
        }
    }
}

