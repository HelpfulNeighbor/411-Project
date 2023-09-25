namespace HelpfulNeighbor.web.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public ICollection<UserRole> UserRoles { get; set; }// Navigation property to UserRole (one-to-many)
        public UserCurrentLocation CurrentLocation { get; set; }// Navigation property to UserCurrentLocation (one-to-one)
    }
}
