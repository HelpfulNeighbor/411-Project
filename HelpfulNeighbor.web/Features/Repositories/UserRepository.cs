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
        private readonly DataContext _context;
        public UserRepository(UserManager<User> userManager, DataContext context)
        {
            _userManager = userManager;
            _context = context;
        }

        public ICollection<UserDto> GetUsers()
        {

            List<UserDto> users = _userManager.Users
                .Select(x => new UserDto
                {
                    Id = x.Id,
                    FirstName = x.FirstName,
                    LastName = x.LastName,
                    UserName = x.UserName,
                    EmailAddress = x.Email,
                    Roles = x.Roles.Select(x => x.Role.Name).ToArray(),
                })
                .OrderBy(u => u.Id)
                .ToList();

            return users;
        }

        public async Task<UserDto> GetUserById(int id)
        {
            var user = await _userManager.FindByIdAsync(id.ToString());

            if (user != null)
            {
                var userDto = new UserDto
                {
                    Id = user.Id,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    UserName = user.UserName,
                    EmailAddress = user.Email,
                    Roles = user.Roles.Select(r => r.Role.Name).ToArray(),
                };

                return userDto;
            }

            return null;
        }

        public async Task<bool> UpdateUser(UserDto user)
        {
            var userToUpdate = await _userManager.FindByIdAsync(user.Id.ToString());

            if (userToUpdate != null)
            {
                userToUpdate.FirstName = user.FirstName;
                userToUpdate.LastName = user.LastName;
                userToUpdate.Email = user.EmailAddress;
                userToUpdate.UserName = user.UserName;

                // Update other properties as needed

                var updateResult = await _userManager.UpdateAsync(userToUpdate);
                return updateResult.Succeeded;
            }

            return false;
        }

        public async Task<bool> DeleteUser(User user)
        {
            if (user == null)
            {
                return false; // User not found
            }

            var deleteResult = await _userManager.DeleteAsync(user);
            return deleteResult.Succeeded;
        }

        public bool UserExist(int id)
        {
            return _context.Users.Any(u => u.Id == id);
        }
    }
}
