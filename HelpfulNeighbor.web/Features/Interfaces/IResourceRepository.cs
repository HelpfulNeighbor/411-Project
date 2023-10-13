using HelpfulNeighbor.web.Features.Models;

namespace HelpfulNeighbor.web.Features.Interfaces
{
    public interface IResourceRepository
    {
        public ICollection<Resource> GetAllResources();
        Resource GetResourceById(int id);
        public ICollection<Resource> GetResourceByName(string name);
        public ICollection<Resource> GetResourceByCity(string city);
        public ICollection<Resource> GetResourceByParish(string parish);
        public ICollection<Resource> GetResourceByResourceType(string type);
        bool ResourceExist(int id);
    }
}
