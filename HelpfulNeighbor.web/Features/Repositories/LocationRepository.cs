using HelpfulNeighbor.web.Data;
using HelpfulNeighbor.web.Features.Interfaces;
using HelpfulNeighbor.web.Features.Models;

namespace HelpfulNeighbor.web.Features.Repositories
{
    public class LocationRepository : ILocationRepository
    {
        private readonly DataContext _context;
        public LocationRepository(DataContext context)
        {
            _context = context;
        }
        public ICollection<Location> GetLocations()
        {
            return _context.Locations.OrderBy(l => l.LocationId).ToList();
        }
    }
}
