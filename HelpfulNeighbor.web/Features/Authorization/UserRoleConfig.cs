using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HelpfulNeighbor.web.Features.Authorization
{
    public class UserRoleConfig : IEntityTypeConfiguration<UserRole>
    {
            public void Configure(EntityTypeBuilder<UserRole> builder)
            {
                builder.HasKey(x => new { x.UserId, x.RoleId });
            // Remove any references to Roles property bc this is already defined by default in Identity
            //builder.HasOne(x => x.Role).WithMany(x => x.Users).HasForeignKey(x => x.RoleId);
            //builder.HasOne(x => x.User).WithMany(x => x.Roles).HasForeignKey(x => x.UserId);
        }
    }
    }
