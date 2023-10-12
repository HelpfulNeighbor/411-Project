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

        public Resource GetResourceByName(string name)
        {
            return _context.Resources.Where(r => r.Name == name).FirstOrDefault();
        }
        public Resource GetResourceByCity(string city)
        {
            return _context.Resources.Where(r => r.City == city).FirstOrDefault();
        }

        public Resource GetResourceByParish(string parish)
        {
            return _context.Resources.Where(r => r.Parish == parish).FirstOrDefault();
        }

        public Resource GetResourceByResourceType(string type)
        {
            return _context.Resources.Where(r => r.ResourceType == type).FirstOrDefault();
        }

        public bool ResourceExist(int id)
        {
            return _context.Resources.Any(r => r.ResourceId == id);
        }
    }
}
