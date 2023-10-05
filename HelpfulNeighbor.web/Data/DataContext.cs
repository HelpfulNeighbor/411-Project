using HelpfulNeighbor.web.Features.Authorization;
using HelpfulNeighbor.web.Features.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

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
        public DbSet<SavedResource> SavedResources { get; set; }
        public DbSet<SavedShelter> SavedShelters { get; set; }
        public DbSet<Shelter> Shelters { get; set; }
        public DbSet<UserCurrentLocation> UserCurrentLocations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Resource
            modelBuilder.Entity<Resource>()
                .HasKey(r => r.ResourceId);

            // Shelter
            modelBuilder.Entity<Shelter>()
                .HasKey(r => r.ResourceId);

            // Location
            modelBuilder.Entity<Location>()
                .HasKey(l => l.LocationId);
            modelBuilder.Entity<Location>()
                .Property(l => l.Latitude)
                .HasColumnType("decimal(8, 6)");
            modelBuilder.Entity<Location>()
                .Property(l => l.Longitude)
                .HasColumnType("decimal(9, 6)");

            // Location to Resource (one-to-one)
            modelBuilder.Entity<Location>()
                .HasOne(l => l.Resource)
                .WithOne(r => r.Location)
                .HasForeignKey<Resource>(r => r.LocationId);

            // Location to Shelter (one-to-one)
            modelBuilder.Entity<Location>()
                .HasOne(l => l.Shelter)
                .WithOne(s => s.Location)
                .HasForeignKey<Shelter>(s => s.LocationId);

            // User to UserCurrentLocation (one-to-one)
            modelBuilder.Entity<User>()
                .HasOne(u => u.UserCurrentLocation)
                .WithOne(ul => ul.User)
                .HasForeignKey<UserCurrentLocation>(ul => ul.UserId);

            // UserCurrentLocation to User (one-to-one)
            modelBuilder.Entity<UserCurrentLocation>()
                .HasOne(ul => ul.User)
                .WithOne(u => u.UserCurrentLocation)
                .HasForeignKey<UserCurrentLocation>(ul => ul.UserId);

            // UserRole
            modelBuilder.Entity<UserRole>()
                .HasKey(ur => new { ur.UserId, ur.RoleId });
            modelBuilder.Entity<UserRole>()
                .HasOne(ur => ur.User)
                .WithMany(u => u.Roles)
                .HasForeignKey(ur => ur.UserId);
            modelBuilder.Entity<UserRole>()
                .HasOne(ur => ur.Role)
                .WithMany()
                .HasForeignKey(ur => ur.RoleId);

            // Role
            modelBuilder.Entity<Role>()
                .HasKey(r => r.Id);

            // HoursOfOperation
            modelBuilder.Entity<HoursOfOperation>()
                .HasKey(ho => ho.HoursId);

            // SavedResources
            modelBuilder.Entity<SavedResource>()
                .HasKey(sr => sr.SavedResourceId);

            //SavedShelter
            modelBuilder.Entity<SavedShelter>()
                .HasKey(ss => ss.SavedShelterId);

            // UserCurrentLocation
            modelBuilder.Entity<UserCurrentLocation>()
                .HasKey(cl => cl.Id);
        }
    }
}





