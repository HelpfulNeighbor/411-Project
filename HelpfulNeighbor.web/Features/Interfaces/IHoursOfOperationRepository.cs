using HelpfulNeighbor.web.Features.Models;

namespace HelpfulNeighbor.web.Features.Interfaces
{
    public interface IHoursOfOperationRepository
    {
        public ICollection<HoursOfOperation> GetHoursOfOperations();
        HoursOfOperation GetHoursOfOperationById(int id);
        public ICollection<HoursOfOperation> GetHoursOfOperationsById(int id);
        bool HoursOfOperationExist(int id);
    }
}
