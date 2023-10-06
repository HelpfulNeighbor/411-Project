using HelpfulNeighbor.web.Features.Models;

namespace HelpfulNeighbor.web.Features.Interfaces
{
    public interface IHoursOfOperation
    {
        public ICollection<HoursOfOperation> GetHoursOfOperations();
    }
}
