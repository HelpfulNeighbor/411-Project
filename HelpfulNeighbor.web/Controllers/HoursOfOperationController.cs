using AutoMapper;
using HelpfulNeighbor.web.Features.Interfaces;
using HelpfulNeighbor.web.Features.Models;
using Microsoft.AspNetCore.Mvc;

namespace HelpfulNeighbor.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HoursOfOperationController : Controller
    {
        private readonly IHoursOfOperationRepository _hoursOfOperationRepository;
        private readonly IMapper _mapper;
        public HoursOfOperationController(IHoursOfOperationRepository hoursOfOperationRepository, IMapper mapper)
        {
                _hoursOfOperationRepository = hoursOfOperationRepository;
                _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<HoursOfOperation>))]
        public IActionResult GetHoursOfOperations()
        {
            var hourOfOperations = _mapper.Map<List<HoursOfOperation>>(_hoursOfOperationRepository.GetHoursOfOperations());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(hourOfOperations);
        }

        [HttpGet("hours/{hoursId}")]
        [ProducesResponseType(200, Type = typeof(HoursOfOperation))]
        [ProducesResponseType(400)]
        public IActionResult GetHoursOfOperationById(int hoursId)
        {
            if (!_hoursOfOperationRepository.HoursOfOperationExist(hoursId))
                return NotFound();

            var hourOfOperation = _mapper.Map<HoursOfOperation>(_hoursOfOperationRepository.GetHoursOfOperationById(hoursId));

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(hourOfOperation);
        }

        [HttpGet("resources/{resourceId}")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<HoursOfOperation>))]
        [ProducesResponseType(400)]
        public IActionResult GetHoursOfOperationsById (int resourceId) 
        {
            if (!_hoursOfOperationRepository.HoursOfOperationExist(resourceId))
                return NotFound();

            var hourOfOperations = _mapper.Map<List<HoursOfOperation>>(_hoursOfOperationRepository.GetHoursOfOperationsByResource(resourceId));

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(hourOfOperations);
        }



    }
}
