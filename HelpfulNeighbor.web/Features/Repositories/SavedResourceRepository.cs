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

        public bool CreateSavedResource(SavedResource savedResource)
        {
            _context.Add(savedResource);
            return Save();
        }

        public ICollection<SavedResource> GetSavedResources(int userId)
        {
            return _context.SavedResources.Where(u => u.UserId == userId).OrderBy(sr => sr.SavedResourceId).ToList();
        }

        public bool SavedResourceExists(int userId, int resourceId)
        {
            return _context.SavedResources.Any(sr => sr.UserId == userId && sr.ResourceId == resourceId);
        }

        public SavedResource GetSavedResource(int userId, int resourceId)
        {
            return _context.SavedResources.FirstOrDefault(sr => sr.UserId == userId && sr.ResourceId == resourceId);
        }

        public bool DeleteSavedResource(SavedResource savedResource)
        {
            _context.SavedResources.Remove(savedResource);
            return Save();
        }

        public bool Save()
        {
            return _context.SaveChanges() > 0;
        }
    }
}