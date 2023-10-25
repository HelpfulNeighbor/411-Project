using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace HelpfulNeighbor.web.Features.Dto
{
    public class HoursOfOperationDto
    {
        [Key]
        public int HoursId { get; set; }
        public int ResourceId { get; set; }
        public string? DayOfWeek { get; set; }
        public string? OpenTime { get; set; }
        public string? CloseTime { get; set; }
    }
}
