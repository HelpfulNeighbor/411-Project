using HelpfulNeighbor.web.Models;
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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Resource>()
                .HasKey(r => r.ResourceId);
            modelBuilder.Entity<Shelter>()
                .HasKey(r => r.ResourceId);
        }

    }
}
