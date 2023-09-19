using HelpfulNeighbor.web.Models;

namespace HelpfulNeighbor.web.Interfaces
{
    public interface IRoleRepository
    {
        ICollection<Role> GetRoles();
    }
}
