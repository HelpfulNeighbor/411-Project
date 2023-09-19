namespace HelpfulNeighbor.web.Models
{
    public class Location
    {
        public int LocationId { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public Resource Resource { get; set; }// Navigation property to Resource (one-to-one)
        public Shelter Shelter { get; set; } // Navigation property to Shelter (one-to-one)
        public UserCurrentLocation UserCurrentLocation { get; set; }// Navigation property to UserCurrentLocation (one-to-one)
    }
}
