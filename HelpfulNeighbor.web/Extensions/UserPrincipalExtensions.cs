using HelpfulNeighbor.web.Features.Authorization;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;

namespace HelpfulNeighbor.web.Extensions
{
    public static class UserPrincipalExtensions
    {
        public static int? GetCurrentUserId(this ClaimsPrincipal claimsPrincipal)
        {
            var userIdClaimValue = claimsPrincipal.FindFirstValue(ClaimTypes.NameIdentifier);
            if (userIdClaimValue == null)
            {
                return null;
            }
            return int.Parse(userIdClaimValue);
        }

        public static string? GetCurrentUserName(this ClaimsPrincipal claimsPrincipal)
        {
            return claimsPrincipal.Identity?.Name;
        }

        public static async Task<User?> GetCurrentUserAsync(this ClaimsPrincipal claimsPrincipal, UserManager<User> userManager)
        {
            return await userManager.GetUserAsync(claimsPrincipal);
        }
    }
}
