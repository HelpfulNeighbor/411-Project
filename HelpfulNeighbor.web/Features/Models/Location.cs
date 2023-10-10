using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace HelpfulNeighbor.web.Features.Models
{
    public class Location
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int LocationId { get; set; }
        [JsonProperty("Latitude")]
        public decimal? Latitude { get; set; }
        [JsonProperty("Longitude")]
        public decimal? Longitude { get; set; }
        public Resource Resource { get; set; }// Navigation property to Resource (one-to-one)
        public Shelter Shelter { get; set; } // Navigation property to Shelter (one-to-one)
        public UserCurrentLocation UserCurrentLocation { get; set; }// Navigation property to UserCurrentLocation (one-to-one)
    }
}
