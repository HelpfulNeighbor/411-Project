using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace HelpfulNeighbor.web.Features.Models
{
    public class Location
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int LocationId { get; set; }
        public decimal? Latitude { get; set; }
        public decimal? Longitude { get; set; }
        public Resource Resource { get; set; }// Navigation property to Resource (one-to-one)
        public Shelter Shelter { get; set; } // Navigation property to Shelter (one-to-one)
        public UserCurrentLocation UserCurrentLocation { get; set; }// Navigation property to UserCurrentLocation (one-to-one)
    }
}
