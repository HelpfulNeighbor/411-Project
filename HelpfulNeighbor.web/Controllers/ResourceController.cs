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

        [HttpGet("Search")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Resource>))]
        [ProducesResponseType(400)]
        public IActionResult SearchResources(string searchQuery = null, bool filterByResourceType = false, string resourceType = null, bool filterByParish = false, string parish = null)
        {
            var resources = _resourceRepository.SearchResources(searchQuery);

            if (filterByResourceType && !string.IsNullOrEmpty(resourceType))
            {
                resources = _resourceRepository.FilterResourcesByResourceType(resources, resourceType);
            }

            if (filterByParish && !string.IsNullOrEmpty(parish))
            {
                resources = _resourceRepository.FilterResourcesByParish(resources, parish);
            }

            var resourceDtos = _mapper.Map<List<ResourceDto>>(resources);

            if (resourceDtos == null || !resourceDtos.Any())
            {
                return NotFound();
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return Ok(resourceDtos);
        }

    }
}
