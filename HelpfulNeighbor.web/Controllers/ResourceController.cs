using HelpfulNeighbor.web.Interfaces;
using HelpfulNeighbor.web.Models;
using Microsoft.AspNetCore.Mvc;

namespace HelpfulNeighbor.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResourceController : Controller
    {
        private readonly IResourceRepository _resourceRepository;
        public ResourceController(IResourceRepository resourceRepository)
        {
            _resourceRepository = resourceRepository;
        }
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Resource>))]
        public IActionResult GetResources()
        {
            var resource = _resourceRepository.GetResources();

            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(resource);
        }

    }
}
