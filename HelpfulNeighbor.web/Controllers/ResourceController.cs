using HelpfulNeighbor.web.Features.Interfaces;
using HelpfulNeighbor.web.Features.Models;
using HelpfulNeighbor.web.Features.Repositories;
using Microsoft.AspNetCore.Mvc;
using System.Resources;

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
        public IActionResult GetAllResources()
        {
            var resource = _resourceRepository.GetAllResources();

            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return Ok(resource);
        }

        [HttpGet("{ResourceId}")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Resource>))]
        [ProducesResponseType(400)]
        public IActionResult GetResourceById(int id) 
        {
            if (!_resourceRepository.ResourceExist(id))
                   return NotFound();

            var resource = _resourceRepository.GetResourceById(id);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return Ok(resource);
        }

        [HttpGet("Name")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Resource>))]
        [ProducesResponseType(400)]
        public IActionResult GetResourceByName(string name)
        {

            var resources = _resourceRepository.GetResourceByName(name);

            if (resources == null || !resources.Any())
            {
                return NotFound();
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return Ok(resources);
        }

        [HttpGet("City")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Resource>))]
        [ProducesResponseType(400)]
        public IActionResult GetResourceByCity(string city)
        {
            var resources = _resourceRepository.GetResourceByCity(city);

            if (resources == null || !resources.Any())
            {
                return NotFound();
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return Ok(resources);
        }

        [HttpGet("Parish")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Resource>))]
        [ProducesResponseType(400)]
        public IActionResult GetResourceByParish(string parish)
        {
            var resources = _resourceRepository.GetResourceByParish(parish);

            if (resources == null || !resources.Any())
            {
                return NotFound();
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return Ok(resources);
        }

        [HttpGet("ResourceType")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Resource>))]
        [ProducesResponseType(400)]
        public IActionResult GetResourceByResourceType(string type)
        {
            var resources = _resourceRepository.GetResourceByResourceType(type);

            if (resources == null || !resources.Any())
            {
                return NotFound();
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return Ok(resources);
        }

    }
}
