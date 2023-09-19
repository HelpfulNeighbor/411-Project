using HelpfulNeighbor.web.Models;

namespace HelpfulNeighbor.web.Interfaces
{
    public interface IUserRoleRepository
    {
        ICollection<UserRole> GetUserRoles();
    }
}
