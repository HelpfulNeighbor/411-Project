﻿using HelpfulNeighbor.web.Extensions;
using HelpfulNeighbor.web.Features.Authorization;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HelpfulNeighbor.web.Controllers
{

    [ApiController]
    [Route("api/authentication")]
    public class AuthenticationController : ControllerBase
    {

        private readonly SignInManager<User> signInManager;
        private readonly UserManager<User> userManager;

        public AuthenticationController(SignInManager<User> signInManager, UserManager<User> userManager)
        {
            this.signInManager = signInManager;
            this.userManager = userManager;
        }

        [HttpGet("me")]
        [Authorize]
        public async Task<ActionResult<UserDto>> Me()
        {
            var username = User.GetCurrentUserName();
            var resultDto = await GetUserDto(userManager.Users).FirstOrDefaultAsync(x => x.UserName == username);

            if (resultDto == null)
            {
                return NotFound();
            }

            return Ok(resultDto);
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto dto)
        {
            var user = await userManager.FindByNameAsync(dto.UserName);
            if (user == null)
            {
                return BadRequest();
            }
            var result = await signInManager.CheckPasswordSignInAsync(user, dto.Password, true);
            if (!result.Succeeded)
            {
                return BadRequest();
            }

            await signInManager.SignInAsync(user, false);

            var resultDto = await GetUserDto(userManager.Users).SingleAsync(x => x.UserName == user.UserName);
            return Ok(resultDto);
        }

        [HttpPost("logout")]
        [Authorize]
        public async Task<ActionResult> Logout()
        {
            await signInManager.SignOutAsync();
            return Ok();
        }

        private static IQueryable<UserDto> GetUserDto(IQueryable<User> users)
        {
            return users.Select(x => new UserDto
            {
                Id = x.Id,
                FirstName = x.FirstName!,
                LastName = x.LastName!,
                UserName = x.UserName!,
                EmailAddress = x.Email!,
                Roles = x.Roles.Select(y => y.Role!.Name).ToArray()!
            });
        }

    }
   
}
