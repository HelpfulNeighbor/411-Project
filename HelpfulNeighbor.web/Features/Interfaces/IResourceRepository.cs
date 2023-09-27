using HelpfulNeighbor.web.Features.Models;

namespace HelpfulNeighbor.web.Features.Interfaces
{
    public interface IResourceRepository
    {
        ICollection<Resource> GetResources();
    }
}
