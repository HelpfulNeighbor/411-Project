using HelpfulNeighbor.web.Models;

namespace HelpfulNeighbor.web.Interfaces
{
    public interface IResourceRepository
    {
        ICollection<Resource> GetResources();
    }
}
