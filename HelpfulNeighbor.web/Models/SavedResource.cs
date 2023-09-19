namespace HelpfulNeighbor.web.Models
{
    public class SavedResource
    {
        public int SavedResourcceId { get; set; }
        public int UserId { get; set; } //Foregin key - modify later
        public int ResourceId { get; set; } //Foreign key - modify later
    }
}
