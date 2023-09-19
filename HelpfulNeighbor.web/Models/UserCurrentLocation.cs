namespace HelpfulNeighbor.web.Models
{
    public class UserCurrentLocation
    {
        public int UserId { get; set; } // Foreign key - modify later
        public int LocationId { get; set; } // Foreign key - modify later
        public DateTime Timestamp { get; set; }
    }
}
