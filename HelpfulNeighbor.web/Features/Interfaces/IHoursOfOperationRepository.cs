using HelpfulNeighbor.web.Features.Models;

namespace HelpfulNeighbor.web.Features.Interfaces
{
    public interface IHoursOfOperationRepository
    {
        public ICollection<HoursOfOperation> GetHoursOfOperations();
    }
}
