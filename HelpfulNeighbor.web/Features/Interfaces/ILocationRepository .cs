using HelpfulNeighbor.web.Features.Models;

namespace HelpfulNeighbor.web.Features.Interfaces
{
    public interface ILocationRepository
    {
        ICollection<Location> GetLocations();
    }
}
