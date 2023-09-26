namespace HelpfulNeighbor.web.Models
{
    public class UserRole
    {
        public int UserRoleId { get; set; }
        public int UserId { get; set; }
        public int RoleId { get; set; }
        public User User { get; set; }// Navigation property to User (many-to-one)
        public Role Role { get; set; }// Navigation property to Roles (many-to-one)
    }
}
