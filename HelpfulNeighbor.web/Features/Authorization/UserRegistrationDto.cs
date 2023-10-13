using System.ComponentModel.DataAnnotations;

namespace HelpfulNeighbor.web.Features.Authorization
{
    public class UserRegistrationDto
    {
        [Required(ErrorMessage = "First name is required.")]
        public string? FirstName { get; set; } 
        [Required(ErrorMessage = "Last name is required.")]
        public string? LastName { get; set; } 
        [Required(ErrorMessage = "Username is required.")]
        public string? UserName { get; set; } 

        [Required(ErrorMessage = "Password is required.")]
        public string? Password { get; set; } 

        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress]
        public string? Email { get; set; } 

        [Required, MinLength(1)]
        public string[] Roles { get; set; } = Array.Empty<string>();
    }
}
