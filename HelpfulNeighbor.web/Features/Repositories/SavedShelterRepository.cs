using HelpfulNeighbor.web.Data;
using HelpfulNeighbor.web.Features.Interfaces;
using HelpfulNeighbor.web.Features.Models;

namespace HelpfulNeighbor.web.Features.Repositories
{
    public class SavedShelterRepository : ISavedShelterRepository
    {
        private readonly DataContext _context;
        public SavedShelterRepository(DataContext context)
        {
                _context = context;
        }

        public ICollection<SavedShelter>GetSavedShelters() 
        {
            return _context.SavedShelters.OrderBy(ss => ss.SavedShelterId).ToList();
        }
    }
}
