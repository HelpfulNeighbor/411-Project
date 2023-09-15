using HelpfulNeighbor.web.Data;
using HelpfulNeighbor.web.Resources.AffordableHousing.Models;

namespace HelpfulNeighbor.web
{
    public class SeededData
    {
        private readonly DataContext dataContext;
        public SeededData(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        public void SeedDataContext()
        {
            
        }
    }
}
