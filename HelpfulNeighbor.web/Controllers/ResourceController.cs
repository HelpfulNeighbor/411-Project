using AutoMapper;
using HelpfulNeighbor.web.Features.Dto;
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
        private readonly IMapper _mapper;
        public ResourceController(IResourceRepository resourceRepository, IMapper mapper)
        {
            _resourceRepository = resourceRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Resource>))]
        public IActionResult GetAllResources()
        {
            var resource = _mapper.Map<List<ResourceDto>>(_resourceRepository.GetAllResources());

            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return Ok(resource);
        }

        [HttpGet("{resourceId}")]
        [ProducesResponseType(200, Type = typeof(Resource))]
        [ProducesResponseType(400)]
        public IActionResult GetResourceById(int resourceId) 
        {
            if (!_resourceRepository.ResourceExist(resourceId))
                   return NotFound();

            var resource = _mapper.Map<ResourceDto>(_resourceRepository.GetResourceById(resourceId));

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

            var resources = _mapper.Map<List<ResourceDto>>(_resourceRepository.GetResourceByName(name));

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
            var resources = _mapper.Map<List<ResourceDto>>(_resourceRepository.GetResourceByCity(city));

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
            var resources = _mapper.Map<List<ResourceDto>>(_resourceRepository.GetResourceByParish(parish));

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
            var resources = _mapper.Map<List<ResourceDto>>(_resourceRepository.GetResourceByResourceType(type));

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
