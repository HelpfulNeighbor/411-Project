using AutoMapper;
using HelpfulNeighbor.web.Features.Dto;
using HelpfulNeighbor.web.Features.Models;

namespace HelpfulNeighbor.web.Helper
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
                CreateMap<Resource,ResourceDto>();
                CreateMap<HoursOfOperation,HoursOfOperationDto>();
                CreateMap<Resource, ResourceWithHoursDto>()
                .ForMember(dest => dest.HoursOfOperation, opt => opt.MapFrom(src => src.HoursOfOperation));
        }
    }
}
