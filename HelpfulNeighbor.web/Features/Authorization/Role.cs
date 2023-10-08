using Microsoft.AspNetCore.Identity;

namespace HelpfulNeighbor.web.Features.Authorization
{
    public class Role : IdentityRole<int>
    {
       public virtual ICollection<UserRole> Users { get; set; } = new List<UserRole>();

    }
}
