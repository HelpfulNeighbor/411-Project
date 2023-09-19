namespace HelpfulNeighbor.web.Models
{
    public class SavedShelter
    {
        public int SavedShelterId { get; set; }
        public int UserId { get; set; } //Foregin key - modify later
        public int ResourceId { get; set; } //Foreign key - modify later
    }
}
