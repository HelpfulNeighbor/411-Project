using HelpfulNeighbor.web.Features.Models;

namespace HelpfulNeighbor.web.Features.Interfaces
{
    public interface IUserCurrentLocationRepository
    {
        public ICollection<UserCurrentLocation> GetUserCurrentLocations();
    }
}
