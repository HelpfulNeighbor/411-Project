namespace HelpfulNeighbor.web.Features.Authorization
{
    public class AccountLoginResponseDto
    {
        public string Token { get; set; }

        public DateTime Expire { get; set; }
    }
}
