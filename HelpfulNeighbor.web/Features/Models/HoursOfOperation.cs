using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace HelpfulNeighbor.web.Features.Models
{
    public class HoursOfOperation
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int HoursId { get; set; }
        public int ResourceId { get; set; } // Foreign key to Resource or Shelter (one-to-one)
        public string? DayOfWeek { get; set; }
        public string? OpenTime { get; set; }
        public string? CloseTime { get; set; }
        public Resource Resource { get; set; }// Navigation property to Resource or Shelter (one-to-one)
    }
}
