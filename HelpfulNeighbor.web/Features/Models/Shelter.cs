using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace HelpfulNeighbor.web.Features.Models
{
    public class Shelter
    {
        [Key]
        public int ResourceId { get; set; }
        [JsonProperty("Name")]
        public string? Name { get; set; }
        [JsonProperty("City")]
        public string? City { get; set; }
        [JsonProperty("Address")]
        public string? Address { get; set; }
        [JsonProperty("ShelterType")]
        public string? ShelterType { get; set; }
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
        [JsonProperty("LocationId")]
        public int LocationId { get; set; }
        public Location Location { get; set; }// Navigation property to Location (one-to-one)
        /*           
         *           If we decide to make ResourceType an int
         *           
        public int ResourceTypeId { get; set; }// Foreign key to ResourceType (many-to-one)
        public ResourceType ResourceType { get; set; }// Navigation property to ResourceType (many-to-one)
        */
    }
}
