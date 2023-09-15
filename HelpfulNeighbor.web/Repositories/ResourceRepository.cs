using HelpfulNeighbor.web.Data;
using HelpfulNeighbor.web.Models;

namespace HelpfulNeighbor.web.Repositories
{
    public class ResourceRepository
    {
        private readonly DataContext _context;

        public ResourceRepository(DataContext context) 
        {
            _context = context;
        }
        public ICollection<Resource> GetResources()
        {
            return _context.Resources.OrderBy(r => r.Name).ToList();    
        }
    }
}
