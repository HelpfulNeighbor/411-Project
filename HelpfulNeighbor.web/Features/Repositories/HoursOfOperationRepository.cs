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

        public HoursOfOperation GetHoursOfOperationById(int id)
        {
            return _context.HoursOfOperations.Where(h => h.HoursId == id).FirstOrDefault();
        }

        public ICollection<HoursOfOperation> GetHoursOfOperationsByResource(int id)
        {
            return _context.HoursOfOperations.Where(h => h.ResourceId == id).ToList();
        }

        public bool HoursOfOperationExist(int id)
        {
            return _context.HoursOfOperations.Any(h => h.HoursId == id);
        }
    }
}
