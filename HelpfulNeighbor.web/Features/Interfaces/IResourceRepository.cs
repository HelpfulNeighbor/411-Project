using HelpfulNeighbor.web.Features.Models;

namespace HelpfulNeighbor.web.Features.Interfaces
{
    public interface IResourceRepository
    {
        public ICollection<Resource> GetResources();
    }
}
