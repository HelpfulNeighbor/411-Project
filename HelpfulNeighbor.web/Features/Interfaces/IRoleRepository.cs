using HelpfulNeighbor.web.Features.Authorization;

namespace HelpfulNeighbor.web.Features.Interfaces
{
    public interface IRoleRepository
    {
        ICollection<Role> GetRoles();
    }
}
