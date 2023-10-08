using HelpfulNeighbor.web.Data;
using HelpfulNeighbor.web.Features.Interfaces;
using HelpfulNeighbor.web.Features.Models;

namespace HelpfulNeighbor.web.Features.Repositories
{
    public class UserCurrentLocationRepository : IUserCurrentLocationRepository
    {
        private readonly DataContext _context;
        public UserCurrentLocationRepository(DataContext context)
        {
                _context = context;
        }

        public ICollection<UserCurrentLocation> GetUserCurrentLocations() 
        {
            return _context.UserCurrentLocations.OrderBy(cl => cl.Id).ToList(); 
        }
    }
}
