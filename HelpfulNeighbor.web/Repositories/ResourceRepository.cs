using HelpfulNeighbor.web.Data;
using HelpfulNeighbor.web.Interfaces;
using HelpfulNeighbor.web.Models;

namespace HelpfulNeighbor.web.Repositories
{
    public class ResourceRepository :IResourceRepository
    {
        private readonly DataContext _context;

        public ResourceRepository(DataContext context) 
        {
            _context = context;
        }
        public ICollection<Resource> GetResources()
        {
            return _context.Resources.OrderBy(r => r.ResourceId).ToList();    
        }
    }
}
