using HelpfulNeighbor.web.Models;

namespace HelpfulNeighbor.web.Interfaces
{
    public interface IShelterRepositorycs
    {
        ICollection<Shelter> GetShelters();
    }
}
