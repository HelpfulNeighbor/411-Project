﻿using HelpfulNeighbor.web.Features.Models;
using HelpfulNeighbor.web.Features.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace HelpfulNeighbor.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HourOfOperationController : Controller
    {
        private readonly HoursOfOperationRepository _hoursOfOperationRepository;
        public HourOfOperationController(HoursOfOperationRepository hoursOfOperationRepository)
        {
                _hoursOfOperationRepository = hoursOfOperationRepository;
        }
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<HoursOfOperation>))]
        public IActionResult GetHoursOfOperations()
        {
            var hourOfOperation = _hoursOfOperationRepository.GetHoursOfOperations();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(hourOfOperation);
        }
    }
}
