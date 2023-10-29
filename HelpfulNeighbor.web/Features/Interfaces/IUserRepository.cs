using HelpfulNeighbor.web.Features.Authorization;

namespace HelpfulNeighbor.web.Features.Interfaces
{
    public interface IUserRepository
    {
        ICollection<UserDto> GetUsers();
        Task<UserDto> GetUserById(int id); 
        Task<bool> UpdateUser(UserDto user);
        Task<bool> DeleteUser(User user);

    }
}
