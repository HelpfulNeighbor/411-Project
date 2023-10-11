using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace HelpfulNeighbor.web.Features.Models
{
    public class HoursOfOperation
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int HoursId { get; set; }
        [JsonProperty("ResourceId")]
        public int ResourceId { get; set; } 
        [JsonProperty("DayOfWeek")]
        public string? DayOfWeek { get; set; }
        [JsonProperty("OpenTime")]
        public string? OpenTime { get; set; }
        [JsonProperty("CloseTime")]
        public string? CloseTime { get; set; }
        public Resource Resource { get; set; }
    }
}
