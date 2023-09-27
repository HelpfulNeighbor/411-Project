using HelpfulNeighbor.web.Data;
using HelpfulNeighbor.web.Features.Authorization;
using HelpfulNeighbor.web.Features.Interfaces;

namespace HelpfulNeighbor.web.Features.Repositories
{
    public class RoleRepository : IRoleRepository
    {
        private readonly DataContext _context;
        public RoleRepository(DataContext context)
        {
            _context = context;
        }
        public ICollection<Role> GetRoles()
        {
            return _context.Roles.OrderBy(r => r.Id).ToList();
        }
    }
}
