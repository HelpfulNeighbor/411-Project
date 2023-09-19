namespace HelpfulNeighbor.web.Models
{
    public class UserCurrentLocation
    {
        public int UserId { get; set; } // Foreign key - modify later
        public int LocationId { get; set; } // Foreign key - modify later
        public DateTime Timestamp { get; set; }
        public User User { get; set; } // Navigation property to User (one-to-one)
        public Location Location { get; set; } // Navigation property to Location (one-to-one)
    }
}
