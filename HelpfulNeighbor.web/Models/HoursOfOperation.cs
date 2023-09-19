namespace HelpfulNeighbor.web.Models
{
    public class HoursOfOperation
    {
        public int HoursId { get; set; }
        public int ResourceId { get; set; } // Foreign key - modify later
        public string DayOfWeek { get; set; }
        public string OpenTime { get; set; }
        public string CloseTime { get; set; }
    }
}
