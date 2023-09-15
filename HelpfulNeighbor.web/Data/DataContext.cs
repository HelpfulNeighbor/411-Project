using HelpfulNeighbor.web.Models;
using HelpfulNeighbor.web.Resources.AffordableHousing.Models;
using Humanizer.Localisation;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace HelpfulNeighbor.web.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }
        public DbSet<Resource> Resources { get; set; }
        public DbSet<Shelter> Shelters { get; set; }


    }
}
