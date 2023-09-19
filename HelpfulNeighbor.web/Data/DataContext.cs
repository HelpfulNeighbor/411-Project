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
        public DbSet<User> Users { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<Role> Roles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Resource>()
                .HasKey(r => r.ResourceId);
            modelBuilder.Entity<Shelter>()
                .HasKey(r => r.ResourceId);
            modelBuilder.Entity<User>()
                .HasKey(u => u.UserId);
            modelBuilder.Entity<Location>()
                .HasKey(l => l.LocationId);
            modelBuilder.Entity<UserRole>()
                .HasKey(ur => ur.UserRoleId);
            modelBuilder.Entity<Role>()
                .HasKey(r => r.RoleId);
        }

    }
}
