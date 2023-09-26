using HelpfulNeighbor.web.Models;

namespace HelpfulNeighbor.web.Interfaces
{
    public interface IUserRepository
    {
        ICollection<User> GetUsers();
    }
}
