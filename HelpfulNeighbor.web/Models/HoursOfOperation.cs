namespace HelpfulNeighbor.web.Models
{
    public class HoursOfOperation
    {
        public int HoursId { get; set; }
        public int ResourceId { get; set; } // Foreign key to Resource or Shelter (one-to-one)
        public string DayOfWeek { get; set; }
        public string OpenTime { get; set; }
        public string CloseTime { get; set; }
        public Resource Resource { get; set; }// Navigation property to Resource or Shelter (one-to-one)
    }
}
