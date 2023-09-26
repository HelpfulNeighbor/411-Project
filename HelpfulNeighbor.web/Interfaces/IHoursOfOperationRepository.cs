using HelpfulNeighbor.web.Models;

namespace HelpfulNeighbor.web.Interfaces
{
    public interface IHoursOfOperation
    {
        public ICollection<HoursOfOperation> GetHoursOfOperations();
    }
}
