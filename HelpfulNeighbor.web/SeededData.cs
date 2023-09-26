using HelpfulNeighbor.web.Data;
using HelpfulNeighbor.web.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace HelpfulNeighbor.web
{
    public class SeededData
    {
        private readonly DataContext dataContext;

        public SeededData(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        public void SeedDataContext()
        {
            if (!dataContext.Users.Any())
            {
                // Create Roles if they don't exist
                var role1 = dataContext.Roles.FirstOrDefault(r => r.RoleName == "Admin") ?? new Role
                {
                    RoleName = "Admin"
                };

                var role2 = dataContext.Roles.FirstOrDefault(r => r.RoleName == "User") ?? new Role
                {
                    RoleName = "User"
                };

                // Create Users if they don't exist
                var user1 = dataContext.Users.FirstOrDefault(u => u.Username == "admin") ?? new User
                {
                    Username = "admin",
                    Password = "admin123",
                    Email = "admin@example.com",
                    FirstName = "Admin",
                    LastName = "User",
                    UserRoles = new List<UserRole> { new UserRole { Role = role1 } },
                    CurrentLocation = new UserCurrentLocation { Location = CreateOrGetLocation(40.7128m, -74.0060m), Timestamp = DateTime.Now }
                };

                var user2 = dataContext.Users.FirstOrDefault(u => u.Username == "user") ?? new User
                {
                    Username = "user",
                    Password = "user123",
                    Email = "user@example.com",
                    FirstName = "Regular",
                    LastName = "User",
                    UserRoles = new List<UserRole> { new UserRole { Role = role2 } },
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
    }
}

