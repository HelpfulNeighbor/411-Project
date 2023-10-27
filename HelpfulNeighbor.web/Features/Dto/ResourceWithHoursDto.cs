namespace HelpfulNeighbor.web.Features.Dto
{
    public class ResourceWithHoursDto
    {
        public int ResourceId { get; set; }
        public string? Name { get; set; }
        public string? City { get; set; }
        public string? Address { get; set; }
        public string? AdditionalDetails { get; set; }
        public string? Parish { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Website { get; set; }
        public string? ResourceType { get; set; }
        public decimal? Latitude { get; set; }
        public decimal? Longitude { get; set; }

        public List<HoursOfOperationDto> HoursOfOperation { get; set; }
    }
}
