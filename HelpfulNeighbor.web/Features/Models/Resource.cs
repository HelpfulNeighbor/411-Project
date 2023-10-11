using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HelpfulNeighbor.web.Features.Models
{
    public class Resource
    {
        [Key]
        public int ResourceId { get; set; }
        [JsonProperty("Name")]
        public string? Name { get; set; }
        [JsonProperty("City")]
        public string? City { get; set; }
        [JsonProperty("Address")]
        public string? Address { get; set; }
        [JsonProperty("AdditionalDetails")]
        public string? AdditionalDetails { get; set; }
        [JsonProperty("Parish")]
        public string? Parish { get; set; }
        [JsonProperty("PhoneNumber")]
        public string? PhoneNumber { get; set; }
        [JsonProperty("Website")]
        public string? Website { get; set; }
        [JsonProperty("ResourceType")]
        public string? ResourceType { get; set; }
        [JsonProperty("Latitude")]
        public decimal? Latitude { get; set; }
        [JsonProperty("Longitude")]
        public decimal? Longitude { get; set; }
        public ICollection<HoursOfOperation> HoursOfOperation { get; set; }
        /*           
        *           If we decide to make ResourceType an int
        *           
       public int ResourceTypeId { get; set; }// Foreign key to ResourceType (many-to-one)
       public ResourceType ResourceType { get; set; }// Navigation property to ResourceType (many-to-one)
       */

    }
}
