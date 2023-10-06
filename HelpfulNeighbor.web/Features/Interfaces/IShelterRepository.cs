using HelpfulNeighbor.web.Features.Models;

namespace HelpfulNeighbor.web.Features.Interfaces
{
    public interface IShelterRepository
    {
        ICollection<Shelter> GetShelters();
    }
}
