using System.ComponentModel.DataAnnotations;

namespace HelpfulNeighbor.web.Features.Authorization
{
    public class AccountLoginRequestDto
    {

        [Required]
        public string UserName { get; set; } 

        [Required]
        public string Password { get; set; } 

    }
}
