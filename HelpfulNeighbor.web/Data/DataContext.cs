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

            // HoursOfOperation
            modelBuilder.Entity<HoursOfOperation>()
                .HasKey(ho => ho.HoursId);

            // SavedResources
            modelBuilder.Entity<SavedResource>()
                .HasKey(sr => sr.SavedResourceId);
            modelBuilder.Entity<SavedResource>()
                .HasOne(sr => sr.Resource)
                .WithMany()
                .HasForeignKey(sr => sr.ResourceId);
            modelBuilder.Entity<SavedResource>()
               .HasOne(sr => sr.User)
               .WithMany(u => u.SavedResources)
               .HasForeignKey(sr => sr.UserId);

            //SavedShelter
            modelBuilder.Entity<SavedShelter>()
                .HasKey(ss => ss.SavedShelterId);
            modelBuilder.Entity<SavedShelter>()
              .HasOne(ss => ss.Shelter)
              .WithMany()
              .HasForeignKey(ss => ss.ResourceId);
            modelBuilder.Entity<SavedShelter>()
                .HasOne(ss => ss.User)
                .WithMany(u => u.SavedShelters)
                .HasForeignKey(ss => ss.UserId);

            // UserCurrentLocation
            modelBuilder.Entity<UserCurrentLocation>()
                .HasKey(cl => cl.Id);
            modelBuilder.Entity<UserCurrentLocation>()
                .HasOne(ul => ul.User)
                .WithOne(u => u.UserCurrentLocation)
                .HasForeignKey<UserCurrentLocation>(ul => ul.UserId);

            modelBuilder.ApplyConfiguration(new UserRoleConfig());
        }
    }
}





