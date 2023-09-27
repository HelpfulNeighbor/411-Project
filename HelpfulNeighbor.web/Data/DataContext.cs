using HelpfulNeighbor.web.Features.Authorization;
using HelpfulNeighbor.web.Features.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace HelpfulNeighbor.web.Data
{
    public class DataContext : IdentityDbContext<User, Role, int, IdentityUserClaim<int>, UserRole, IdentityUserLogin<int>, IdentityRoleClaim<int>, IdentityUserToken<int>>
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }
        public DbSet<HoursOfOperation> HoursOfOperations { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Resource> Resources { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<SavedResource> SavedResources { get; set; }
        public DbSet<SavedShelter> SavedShelters { get; set; }
        public DbSet<Shelter> Shelters { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserCurrentLocation> UserCurrentLocations { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }

        public DataContext()
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Resource
            modelBuilder.Entity<Resource>()
                .HasKey(r => r.ResourceId);

            //Shelter
            modelBuilder.Entity<Shelter>()
                .HasKey(r => r.ResourceId);

            //Location
            modelBuilder.Entity<Location>()
                .HasKey(l => l.LocationId);


            //HoursOfOperation
            modelBuilder.Entity<HoursOfOperation>()
                .HasKey(ho => ho.HoursId);

            //SavedResources
            modelBuilder.Entity<SavedResource>()
                .HasKey(sr => sr.SavedResourceId);

            //UserCurrentLocation
            modelBuilder.Entity<UserCurrentLocation>()
                .HasKey(cl => cl.UserId);

            modelBuilder.ApplyConfigurationsFromAssembly(typeof(DataContext).Assembly);


        }

    }
}
