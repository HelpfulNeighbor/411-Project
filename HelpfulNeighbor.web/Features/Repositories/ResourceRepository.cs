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

        public ICollection<Resource> GetResourceByName(string name)
        {
            return _context.Resources.Where(r => r.Name == name).ToList();
        }
        public ICollection<Resource> GetResourceByCity(string city)
        {
            return _context.Resources.Where(r => r.City == city).ToList();
        }

        public ICollection<Resource> GetResourceByParish(string parish)
        {
            return _context.Resources.Where(r => r.Parish == parish).ToList();
        }

        public ICollection<Resource> GetResourceByResourceType(string type)
        {
            return _context.Resources.Where(r => r.ResourceType == type).ToList();
        }

        public bool ResourceExist(int id)
        {
            return _context.Resources.Any(r => r.ResourceId == id);
        }

        public ICollection<Resource> SearchResources(string searchQuery)
        {
            var keywords = searchQuery.Split(' ');

            var query = _context.Resources.AsEnumerable()
                .Where(r =>
                keywords.Any(k => r.Name.Contains(k) || r.ResourceType.Contains(k) || r.City.Contains(k) || r.Parish.Contains(k))
            ).ToList();

            return query;
        }
    }
}
