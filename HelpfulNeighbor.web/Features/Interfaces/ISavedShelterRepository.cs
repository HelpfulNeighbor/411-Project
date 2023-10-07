using HelpfulNeighbor.web.Features.Models;

namespace HelpfulNeighbor.web.Features.Interfaces
{
    public interface ISavedShelterRepository
    {
        public ICollection<SavedShelter> GetSavedShelters();
    }
}
