using HelpfulNeighbor.web.Data;
using HelpfulNeighbor.web.Interfaces;
using HelpfulNeighbor.web.Models;

namespace HelpfulNeighbor.web.Repositories
{
    public class IHoursOfOperationRepository : IHoursOfOperation
    {
        private readonly DataContext _context;
        public IHoursOfOperationRepository(DataContext context) 
        {
            _context = context;
        }   
        public ICollection<HoursOfOperation> GetHoursOfOperations()
        {
            return _context.HoursOfOperations.OrderBy(h=>h.HoursId).ToList();
        } 
    }
}
