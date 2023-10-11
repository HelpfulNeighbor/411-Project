using Azure.Core;
using Azure;
using HelpfulNeighbor.web.Features.Authorization;
using HelpfulNeighbor.web.Features.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Buffers.Text;
using System.Data;
using System.Reflection.Metadata;
using System.Security.Principal;
using System.Transactions;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace HelpfulNeighbor.web.Controllers
{

    [ApiController]
    [Route("api/users")]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly UserManager<User> userManager;
        private readonly RoleManager<Role> roleManager;
        public UsersController(IUserRepository userRepository, UserManager<User> userManager, RoleManager<Role> roleManager)
        {
            _userRepository = userRepository;
            this.userManager = userManager;
            this.roleManager = roleManager;
        }

        [HttpGet]
        [Authorize]
        [ProducesResponseType(200, Type = typeof(IEnumerable<User>))]
        public IActionResult GetUsers()
        {
            var user = _userRepository.GetUsers();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(user);
        }

        [HttpPost]
        [Authorize]
        public async Task<ActionResult<UserDto>> CreateUser(UserRegistrationDto dto)
        {
            using var transaction = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled);

            var newUser = new User
            {
                UserName = dto.UserName,
                FirstName = dto.FirstName,
                LastName = dto.LastName,

            };
            var createResult = await userManager.CreateAsync(newUser, dto.Password);
            if (!createResult.Succeeded)
            {
                return BadRequest();
            }

            try
            {
                var roleResult = await userManager.AddToRolesAsync(newUser, dto.Roles);
                if (!roleResult.Succeeded)
                {
                    return BadRequest();
                }
            }
            catch (InvalidOperationException e) when (e.Message.StartsWith("Role") && e.Message.EndsWith("does not exist."))
            {
                return BadRequest();
            }

            transaction.Complete();

            return Ok(new UserDto
            {
                Id = newUser.Id,
                Roles = dto.Roles,
                UserName = newUser.UserName,
                FirstName = newUser.FirstName,
                LastName = newUser.LastName,
                EmailAddress = newUser.Email,
            });
        }

        [HttpPost]
        [Route("signup")]
        public async Task<ActionResult<UserDto>> Signup(UserRegistrationDto dto)
        {
            using var transaction = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled);

            var newUser = new User
            {
                UserName = dto.UserName,
                FirstName = dto.FirstName,
                LastName = dto.LastName,
            };

            var createResult = await userManager.CreateAsync(newUser, dto.Password);
            if (!createResult.Succeeded)
            {
                return BadRequest();
            }

            // Check if the "Basic" role exists
            if (!await roleManager.RoleExistsAsync("Basic"))
            {
                // If not, create the "Basic" role
                var basicRole = new Role
                {
                    Name = "Basic"
                };
                await roleManager.CreateAsync(basicRole);
            }

            // Assign the "Basic" role to the new user
            var assignRoleResult = await userManager.AddToRoleAsync(newUser, "Basic");
            if (!assignRoleResult.Succeeded)
            {
                return BadRequest();
            }

            transaction.Complete();

            return Ok(new UserDto
            {
                Id = newUser.Id,
                Roles = new string[] { "Basic" }, // You can include other roles here if needed
                UserName = newUser.UserName,
                FirstName = newUser.FirstName,
                LastName = newUser.LastName,
                EmailAddress = newUser.Email,
            });
        }


        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> UpdateUser(int id, UpdateUserDto dto)
        {
            var userToUpdate = await userManager.FindByIdAsync(id.ToString());

            if (userToUpdate == null)
            {
                return NotFound(); 
            }

            userToUpdate.FirstName = dto.FirstName;
            userToUpdate.LastName = dto.LastName;
            userToUpdate.Email = dto.Email;
            userToUpdate.UserName = dto.UserName;

            var result = await userManager.UpdateAsync(userToUpdate);

            if (result.Succeeded)
            {
                return Ok(); 
            }
            else
            {
                return BadRequest(); 
            }
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var userToDelete = await userManager.FindByIdAsync(id.ToString());

            if (userToDelete == null)
            {
                return NotFound(); 
            }

            var result = await userManager.DeleteAsync(userToDelete);

            if (result.Succeeded)
            {
                return NoContent(); 
            }
            else
            {
                return BadRequest(); 
            }
        }

    }
    }
