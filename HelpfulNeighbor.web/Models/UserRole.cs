namespace HelpfulNeighbor.web.Models
{
    public class UserRole
    {
        public int UserRoleId { get; set; }
        public int UserId { get; set; } //Foregin Key - modify later
        public int RoleId { get; set; } // Foregin Key - modify later
    }
}
