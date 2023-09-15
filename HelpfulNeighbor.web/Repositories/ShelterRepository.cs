using HelpfulNeighbor.web.Data;
using HelpfulNeighbor.web.Models;

namespace HelpfulNeighbor.web.Repositories
{
    public class ShelterRepository
    {
        private readonly DataContext _context;
        public ShelterRepository(DataContext context)
        {
            _context = context;
        }
        public ICollection<Shelter> GetResources()
        {
            return _context.Shelters.OrderBy(s => s.Name).ToList();
        }
    }
}
