using Microsoft.EntityFrameworkCore;

namespace HelpfulNeighbor.web.Resources.Charities.Models
{
    public class Charity
    {
        public int ResourceId { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public string AdditionalDetails { get; set; }
        public string Parish { get; set; }
        public string PhoneNumber { get; set; }
        public string Website { get; set; }
        public string ResourceType { get; set; }
    }
}