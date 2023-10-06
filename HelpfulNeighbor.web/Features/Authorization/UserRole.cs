using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HelpfulNeighbor.web.Features.Authorization
{
    public class UserRole : IdentityUserRole<int>
    {
        public virtual User? User { get; set; }// Navigation property to User (many-to-one)
        public virtual Role? Role { get; set; }// Navigation property to Roles (many-to-one)
    }

}
