using HelpfulNeighbor.web.Models;

namespace HelpfulNeighbor.web.Interfaces
{
    public interface IShelterRepository
    {
        ICollection<Shelter> GetShelters();
    }
}
