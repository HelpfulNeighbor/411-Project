namespace HelpfulNeighbor.web.Features.Authorization
{
    public class UserDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string UserName { get; set; } = string.Empty;
        public string EmailAddress { get; set; } = string.Empty;   
        public string[] Roles { get; set; } = Array.Empty<string>();

    }
}
