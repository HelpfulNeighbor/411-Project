using HelpfulNeighbor.web.Features.Models;

namespace HelpfulNeighbor.web.Features.Interfaces
{
    public interface ISavedResourceRepository
    {
        public ICollection<SavedResource> GetSavedResources();
    }
}
