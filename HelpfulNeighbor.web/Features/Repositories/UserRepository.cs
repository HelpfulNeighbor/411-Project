using HelpfulNeighbor.web.Data;
using HelpfulNeighbor.web.Features.Authorization;
using HelpfulNeighbor.web.Features.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpfulNeighbor.web.Features.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly UserManager<User> _userManager;
        public UserRepository(UserManager<User> userManager)
        {
            _userManager = userManager;
        }
        public ICollection<UserDto> GetUsers()
        {

            List<UserDto> users = _userManager.Users
                .Select(x => new UserDto
                {
                    Id = x.Id,
                    UserName = x.UserName,
                    EmailAddress = x.Email,
                    Roles = x.Roles.Select(x => x.Role.Name).ToArray(),
                })
                .OrderBy(u => u.Id)
                .ToList();

            return users;
        }
    }
}
