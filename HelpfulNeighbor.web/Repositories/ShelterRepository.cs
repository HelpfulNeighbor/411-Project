using HelpfulNeighbor.web.Data;
using HelpfulNeighbor.web.Interfaces;
using HelpfulNeighbor.web.Models;

namespace HelpfulNeighbor.web.Repositories
{
    public class ShelterRepository : IShelterRepository
    {
        private readonly DataContext _context;
        public ShelterRepository(DataContext context)
        {
            _context = context;
        }
        public ICollection<Shelter> GetShelters()
        {
            return _context.Shelters.OrderBy(s => s.ResourceId).ToList();
        }
    }
}
