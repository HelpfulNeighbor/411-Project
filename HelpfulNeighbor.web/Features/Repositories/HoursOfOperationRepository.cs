using HelpfulNeighbor.web.Data;
using HelpfulNeighbor.web.Features.Interfaces;
using HelpfulNeighbor.web.Features.Models;

namespace HelpfulNeighbor.web.Features.Repositories
{
    public class HoursOfOperationRepository : IHoursOfOperationRepository
    {
        private readonly DataContext _context;
        public HoursOfOperationRepository(DataContext context)
        {
            _context = context;
        }
        public ICollection<HoursOfOperation> GetHoursOfOperations()
        {
            return _context.HoursOfOperations.OrderBy(h => h.HoursId).ToList();
        }
    }
}
