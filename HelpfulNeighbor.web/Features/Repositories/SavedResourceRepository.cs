using HelpfulNeighbor.web.Data;
using HelpfulNeighbor.web.Features.Interfaces;
using HelpfulNeighbor.web.Features.Models;

namespace HelpfulNeighbor.web.Features.Repositories
{
    public class SavedResourceRepository : ISavedResourceRepository
    {
        private readonly DataContext _context;
        public SavedResourceRepository(DataContext context)
        {
               _context = context;
        }
        public ICollection<SavedResource>GetSavedResources()
        {
                return _context.SavedResources.OrderBy(sr => sr.SavedResourceId).ToList();
        }
    }
}
