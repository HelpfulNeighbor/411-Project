using HelpfulNeighbor.web.Features.Authorization;

namespace HelpfulNeighbor.web.Features.Interfaces
{
    public interface IUserRepository
    {
        ICollection<User> GetUsers();
    }
}
