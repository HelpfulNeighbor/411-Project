using HelpfulNeighbor.web.Features.Authorization;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace HelpfulNeighbor.web.Features.Models
{
    public class SavedResource
    {
        public int SavedResourceId { get; set; }
        public int UserId { get; set; } //Foregin key to user (many-to-one)
        public int ResourceId { get; set; } //Foreign key to resource
        public User User { get; set; }// Navigation property to User(many-to-one)
        public virtual Resource Resource { get; set; }
    }
}
