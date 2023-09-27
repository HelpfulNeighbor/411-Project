using HelpfulNeighbor.web.Data;
using HelpfulNeighbor.web.Features.Authorization;
using HelpfulNeighbor.web.Features.Interfaces;

namespace HelpfulNeighbor.web.Features.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;
        public UserRepository(DataContext context)
        {
            _context = context;
        }
        public ICollection<User> GetUsers()
        {
            return _context.Users.OrderBy(u => u.Id).ToList();
        }
    }
}
