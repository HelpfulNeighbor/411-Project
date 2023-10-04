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


