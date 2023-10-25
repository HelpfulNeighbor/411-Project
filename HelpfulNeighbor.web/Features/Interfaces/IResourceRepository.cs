using HelpfulNeighbor.web.Features.Models;

namespace HelpfulNeighbor.web.Features.Interfaces
{
    public interface IResourceRepository
    {
        public ICollection<Resource> GetAllResources();
        Resource GetResourceById(int id);
        public ICollection<Resource> SearchResources(string searchQuery);
        public ICollection<Resource> FilterResourcesByResourceType(ICollection<Resource> resources, string resourceType);
        public ICollection<Resource> FilterResourcesByParish(ICollection<Resource> resources, string parish);
        bool ResourceExist(int id);
        
    }
}
