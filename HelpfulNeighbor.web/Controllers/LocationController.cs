using HelpfulNeighbor.web.Features.Interfaces;
using HelpfulNeighbor.web.Features.Models;
using Microsoft.AspNetCore.Mvc;

namespace HelpfulNeighbor.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController : Controller
    {
        private readonly ILocationRepository _locationRepository;
        public LocationController(ILocationRepository locationRepository)
        {
                _locationRepository = locationRepository;
        }
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Location>))]
        public IActionResult GetLocations()
        {
            var location = _locationRepository.GetLocations();  
            if(!ModelState.IsValid) 
            {
                return BadRequest(ModelState);
            }
            return Ok(location);
        }
    }
}
