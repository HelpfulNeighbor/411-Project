using System.ComponentModel.DataAnnotations;

namespace HelpfulNeighbor.web.Features.Authorization
{
    public class UserRegistrationDto
    {
        [Required(ErrorMessage = "First name is required.")]
        public string? FirstName { get; init; }

        [Required(ErrorMessage = "Last name is required.")]
        public string? LastName { get; init; } 

        [Required(ErrorMessage = "Username is required.")]
        public string? UserName { get; init; }

        [Required(ErrorMessage = "Password is required.")]
        public string? Password { get; init; }

        [Required(ErrorMessage = "Email is required.")]
        public string? Email { get; init; }

        [Required, MinLength(1)]
        public string[] Roles { get; set; } = Array.Empty<string>();
    }
}
