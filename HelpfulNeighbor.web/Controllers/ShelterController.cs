using HelpfulNeighbor.web.Features.Interfaces;
using HelpfulNeighbor.web.Features.Models;
using Microsoft.AspNetCore.Mvc;

namespace HelpfulNeighbor.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShelterController : Controller
    {
        private readonly IShelterRepository _shelterRepository;
        public ShelterController(IShelterRepository shelterRepository)
        {
            _shelterRepository = shelterRepository;
        }
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Shelter>))]
        public IActionResult GetShelters()
        {
            var shelter = _shelterRepository.GetShelters();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(shelter);
        }
    }
}
