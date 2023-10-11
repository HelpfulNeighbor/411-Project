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
        public DbSet<Resource> Resources { get; set; }
        public DbSet<SavedResource> SavedResources { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Resource
            modelBuilder.Entity<Resource>()
                .HasKey(r => r.ResourceId);
            modelBuilder.Entity<Resource>()
                .Property(l => l.Latitude)
                .HasColumnType("decimal(8, 6)");
            modelBuilder.Entity<Resource>()
                .Property(l => l.Longitude)
                .HasColumnType("decimal(9, 6)");

            // HoursOfOperation
            modelBuilder.Entity<HoursOfOperation>()
                .HasKey(ho => ho.HoursId);
            modelBuilder.Entity<HoursOfOperation>()
            .HasOne(h => h.Resource)
            .WithMany(r => r.HoursOfOperation)
            .HasForeignKey(h => h.ResourceId);

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

            modelBuilder.ApplyConfiguration(new UserRoleConfig());
        }
    }
}





