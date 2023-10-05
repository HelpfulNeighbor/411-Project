using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.ComponentModel.DataAnnotations.Schema;

namespace HelpfulNeighbor.web.Features.Authorization
{
    public class UserRole : IdentityUserRole<int>
    {
        [ForeignKey("UserId")]
        public virtual User? User { get; set; }// Navigation property to User (many-to-one)
        [ForeignKey("RoleId")]
        public virtual Role? Role { get; set; }// Navigation property to Roles (many-to-one)

        public class UserRoleConfiguration : IEntityTypeConfiguration<UserRole>
        {
            public void Configure(EntityTypeBuilder<UserRole> builder)
            {
                // Configure any additional mappings or constraints here, if needed
            }
        }
    }

}
