using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace HelpfulNeighbor.web.Features.Models
{
    public class Shelter
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ResourceId { get; set; }
        public string? Name { get; set; }
        public string? City { get; set; }
        public string? Address { get; set; }
        public string? ShelterType { get; set; }
        public string? AdditionalDetails { get; set; }
        public string? Parish { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Website { get; set; }
        public string? ResourceType { get; set; }
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
