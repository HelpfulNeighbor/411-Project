using HelpfulNeighbor.web.Data;
using HelpfulNeighbor.web.Features.Interfaces;
using HelpfulNeighbor.web.Features.Models;

namespace HelpfulNeighbor.web.Features.Repositories
{
    public class ResourceRepository : IResourceRepository
    {
        private readonly DataContext _context;

        public ResourceRepository(DataContext context)
        {
            _context = context;
        }
        public ICollection<Resource> GetAllResources()
        {
            return _context.Resources.OrderBy(r => r.ResourceId).ToList();
        }

        public Resource GetResourceById(int id)
        {
            return _context.Resources.Where(r => r.ResourceId == id).FirstOrDefault();
        }

        public ICollection<Resource> SearchResources(string searchQuery)
        {
            if (string.IsNullOrEmpty(searchQuery))
            {
                return _context.Resources.ToList();
            }

            var lowercaseSearchQuery = searchQuery.ToLower(); 

            var query = _context.Resources.AsEnumerable();

            var keywords = lowercaseSearchQuery.Split(' ');

            query = query.Where(r =>
                keywords.Any(k => r.Name.ToLower().Contains(k) || r.ResourceType.ToLower().Contains(k) || r.City.ToLower().Contains(k) || r.Parish.ToLower().Contains(k))
            );

            return query.ToList();
        }


        public ICollection<Resource> FilterResourcesByResourceType(ICollection<Resource> resources, string resourceType)
        {
            return resources.Where(r => r.ResourceType == resourceType).ToList();
        }

        public ICollection<Resource> FilterResourcesByParish(ICollection<Resource> resources, string parish)
        {
            return resources.Where(r => r.Parish == parish).ToList();
        }

        public bool ResourceExist(int id)
        {
            return _context.Resources.Any(r => r.ResourceId == id);
        }
    }
}
