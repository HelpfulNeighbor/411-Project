using Azure.Core;
using Azure;
using HelpfulNeighbor.web.Features.Authorization;
using HelpfulNeighbor.web.Features.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Transactions;


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


        [HttpPut("{id}")]
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
