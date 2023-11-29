namespace HelpfulNeighbor.web.Features.Dto
{
    public class SavedResourceDto
    {
        public int UserId { get; set; }
        public int ResourceId { get; set; }
        public ResourceDto? Resource { get; set; }
    }
}
