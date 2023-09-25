namespace HelpfulNeighbor.web.Models
{
    public class UserCurrentLocation
    {
        public int UserId { get; set; } // Foreign key 
        public int LocationId { get; set; } // Foreign key 
        public DateTime Timestamp { get; set; }
        public User User { get; set; } // Navigation property to User (one-to-one)
        public Location Location { get; set; } // Navigation property to Location (one-to-one)
    }
}
