using HelpfulNeighbor.web.Features.Models;

namespace HelpfulNeighbor.web.Features.Interfaces
{
    public interface ISavedResourceRepository
    {
        public ICollection<SavedResource> GetSavedResources(int userId);

        bool CreateSavedResource(SavedResource savedResource);

        bool SavedResourceExists(int userId, int resourceId);

        SavedResource GetSavedResource(int userId, int resourceId);

        bool DeleteSavedResource(SavedResource savedResource);

        bool Save();
    }
}
