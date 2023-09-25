﻿using Microsoft.EntityFrameworkCore.Metadata.Internal;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace HelpfulNeighbor.web.Models
{
    public class SavedResource
    {
        public int SavedResourcceId { get; set; }
        public int UserId { get; set; } //Foregin key to user (many-to-one)
        public int ResourceId { get; set; } //Foreign key to resource
        public User User { get; set; }// Navigation property to User(many-to-one)
        public Resource Resource { get; set; } // Navigation property to User(one-to-one)
    }
}
