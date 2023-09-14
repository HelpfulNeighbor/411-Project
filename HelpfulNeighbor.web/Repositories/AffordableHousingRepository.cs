using HelpfulNeighbor.web.Data;

namespace HelpfulNeighbor.web.Repositories
{
    public class AffordableHousingRepository
    {
        private readonly DataContext _context;

        public AffordableHousingRepository(DataContext context) 
        {
            _context = context;
        }
    }
}
