using HelpfulNeighbor.web.Features.Models;
using Microsoft.AspNetCore.Identity;

namespace HelpfulNeighbor.web.Features.Authorization
{
    public class User : IdentityUser<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public virtual ICollection<UserRole> Roles { get; set; } = new List<UserRole>();
        public virtual ICollection<SavedResource> SavedResources { get; set; } = new List<SavedResource>();
    }
}
