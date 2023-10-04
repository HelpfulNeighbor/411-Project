using HelpfulNeighbor.web.Features.Models;
using Microsoft.AspNetCore.Identity;

namespace HelpfulNeighbor.web.Features.Authorization
{
    public class User : IdentityUser<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        // Foreign key to UserCurrentLocation (one-to-one)
        public int? UserCurrentLocationId { get; set; }
        public UserCurrentLocation UserCurrentLocation { get; set; }
    }
}
