﻿using System.ComponentModel.DataAnnotations;

namespace HelpfulNeighbor.web.Models
{
    public class Resource
    {
        [Key]
        public int ResourceId { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public string AdditionalDetails { get; set; }
        public string Parish { get; set; }
        public string PhoneNumber { get; set; }
        public string Website { get; set; }
        public string ResourceType { get; set; }
    }
}
