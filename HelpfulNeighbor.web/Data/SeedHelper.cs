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
        /*   public static async Task MigrateAndSeed(IServiceProvider serviceProvider)
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
           } */
            public static async Task MigrateAndSeed(IServiceProvider serviceProvider)
            {
                var dataContext = serviceProvider.GetRequiredService<DataContext>();

                await dataContext.Database.MigrateAsync();

                await AddRoles(serviceProvider);
                await AddUsers(serviceProvider);

                await AddResource(dataContext);
            }

            private static async Task AddUsers(IServiceProvider serviceProvider)
            {
                const string defaultPassword = "Password123!";
                var userManager = serviceProvider.GetRequiredService<UserManager<User>>();

                if (userManager.Users.Any())
                {
                    return;
                }

                var adminUser = new User
                {
                    UserName = "galkadi"
                };
                await userManager.CreateAsync(adminUser, defaultPassword);
                await userManager.AddToRoleAsync(adminUser, RoleNames.Admin);

                var bob = new User
                {
                    UserName = "bob"
                };
                await userManager.CreateAsync(bob, defaultPassword);
                await userManager.AddToRoleAsync(bob, RoleNames.User);

                var sue = new User
                {
                    UserName = "sue"
                };
                await userManager.CreateAsync(sue, defaultPassword);
                await userManager.AddToRoleAsync(sue, RoleNames.User);
            }

            private static async Task AddRoles(IServiceProvider serviceProvider)
            {
                var roleManager = serviceProvider.GetRequiredService<RoleManager<Role>>();
                if (roleManager.Roles.Any())
                {
                    return;
                }
                await roleManager.CreateAsync(new Role
                {
                    Name = RoleNames.Admin
                });

                await roleManager.CreateAsync(new Role
                {
                    Name = RoleNames.User
                });
            }

            private static async Task AddResource(DataContext dataContext)
            {
                var resources = dataContext.Set<Resource>();

                if (await resources.AnyAsync())
                {
                    return;
                }

                for (int i = 0; i < 3; i++)
                {
                    dataContext.Set<Resource>()
                        .Add(new Resource
                        {
                            Name = "Hammond",
                            City = "",
                            Address = "1234 Place st",
                            AdditionalDetails = "",
                            Parish = "",
                            PhoneNumber = "",
                            Website = "",
                            ResourceType = "",
                        });
                }

                await dataContext.SaveChangesAsync();
            }

        }
    } 

