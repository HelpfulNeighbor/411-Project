using HelpfulNeighbor.web.Data;
using HelpfulNeighbor.web.Interfaces;
using HelpfulNeighbor.web.Models;

namespace HelpfulNeighbor.web.Repositories
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
            return _context.Roles.OrderBy(r => r.RoleId).ToList();
        }
    }
}
