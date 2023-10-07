using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HelpfulNeighbor.web.Features.Authorization
{
    public class UserRoleConfig : IEntityTypeConfiguration<UserRole>
    {
            public void Configure(EntityTypeBuilder<UserRole> builder)
            {
            builder.ToTable("AspNetUserRoles"); // Make sure the table name matches the actual table name in your database
            builder.HasKey(ur => new { ur.UserId, ur.RoleId });

            // Configure the relationships
            builder.HasOne(ur => ur.User)
                .WithMany(u => u.Roles)
                .HasForeignKey(ur => ur.UserId)
                .IsRequired();

            builder.HasOne(ur => ur.Role)
                .WithMany(r => r.Users)
                .HasForeignKey(ur => ur.RoleId)
                .IsRequired();
        }
    }
}
