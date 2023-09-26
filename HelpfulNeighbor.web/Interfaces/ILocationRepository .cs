using HelpfulNeighbor.web.Models;

namespace HelpfulNeighbor.web.Interfaces
{
    public interface ILocationRepository
    {
        ICollection<Location> GetLocations();
    }
}
