using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.ComponentModel.DataAnnotations.Schema;

namespace HelpfulNeighbor.web.Features.Authorization
{
    public class UserRole : IdentityUserRole<int>
    {
      /*  [ForeignKey("UserId")]
        public override int UserId { get; set; }
        
        [ForeignKey("RoleId")]
        public override int RoleId { get; set; }*/

        public virtual User? User { get; set; }
        public virtual Role? Role { get; set; }

    }

}
