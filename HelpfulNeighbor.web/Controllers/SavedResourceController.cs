using AutoMapper;
using HelpfulNeighbor.web.Features.Dto;
using HelpfulNeighbor.web.Features.Interfaces;
using HelpfulNeighbor.web.Features.Models;
using HelpfulNeighbor.web.Features.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;

namespace HelpfulNeighbor.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SavedResourceController : Controller
    {
        private readonly ISavedResourceRepository _savedResourceRepository;
        private readonly IUserRepository _userRepository;
        private readonly IResourceRepository _resourceRepository;
        private readonly IMapper _mapper;

        public SavedResourceController(ISavedResourceRepository savedResourceRepository, IUserRepository userRepository, IResourceRepository resourceRepository, IMapper mapper)
        {
            _savedResourceRepository = savedResourceRepository;
            _userRepository = userRepository;
            _resourceRepository = resourceRepository;
            _mapper = mapper;
        }

        [HttpGet("{userId}")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<SavedResource>))]
        public IActionResult GetSavedResources(int userId)
        {
            if (!_userRepository.UserExist(userId))
                return NotFound();

            var savedResources = _mapper.Map<List<SavedResourceDto>>(_savedResourceRepository.GetSavedResources(userId));

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return Ok(savedResources);
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateSavedResource([FromBody] SavedResourceDto savedResourceDto)
        {
            if (savedResourceDto == null)
            {
                return BadRequest(ModelState);
            }

            if (!_userRepository.UserExist(savedResourceDto.UserId) || !_resourceRepository.ResourceExist(savedResourceDto.ResourceId))
            {
                return BadRequest("Invalid user id or resource id");
            }

            var savedResource = _mapper.Map<SavedResource>(savedResourceDto);

            if (_savedResourceRepository.SavedResourceExists(savedResource.UserId, savedResource.ResourceId))
            {
                return BadRequest("Resource already saved by the user");
            }

            _savedResourceRepository.CreateSavedResource(savedResource);

            return NoContent();
        }

        [HttpDelete("{userId}/{resourceId}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult DeleteSavedResource(int userId, int resourceId)
        {
            if (!_userRepository.UserExist(userId) || !_resourceRepository.ResourceExist(resourceId))
            {
                return BadRequest("Invalid user id or resource id");
            }

            var savedResource = _savedResourceRepository.GetSavedResource(userId, resourceId);
            if (savedResource == null)
            {
                return BadRequest("Saved resource not found");
            }

            _savedResourceRepository.DeleteSavedResource(savedResource);

            return NoContent();
        }



    }
}
