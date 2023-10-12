using HelpfulNeighbor.web.Features.Models;

namespace HelpfulNeighbor.web.Features.Interfaces
{
    public interface IResourceRepository
    {
        public ICollection<Resource> GetAllResources();
        Resource GetResourceById(int id);
        Resource GetResourceByName(string name);
        Resource GetResourceByCity(string city);
        Resource GetResourceByParish(string parish);
        Resource GetResourceByResourceType(string type);
        bool ResourceExist(int id);
    }
}
