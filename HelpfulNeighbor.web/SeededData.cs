using HelpfulNeighbor.web.Data;

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
