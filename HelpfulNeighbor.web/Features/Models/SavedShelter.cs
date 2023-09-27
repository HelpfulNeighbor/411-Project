using HelpfulNeighbor.web.Features.Authorization;

namespace HelpfulNeighbor.web.Features.Models
{
    public class SavedShelter
    {
        public int SavedShelterId { get; set; }
        public int UserId { get; set; } //Foregin key to user (many-to-one)
        public int ResourceId { get; set; } //Foreign key 
        public User User { get; set; }// Navigation property to User(many-to-one)
        public Resource Resource { get; set; } // Navigation property to User(one-to-one)
    }
}
