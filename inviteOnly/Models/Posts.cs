using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Collections.Generic;
using inviteOnly.Models;
using inviteOnly.Models;

namespace inviteOnly.Models

{
    public class Post
    {
        public int Id { get; set; }

        [Required]
        public string UserId { get; set; }

        [Required]
        public string CommunityId { get; set; }

        [DisplayName("Header Image URL")]
        public string Title { get; set; }

        public DateTime DateCreated { get; set; }

    


     

      
    }
}
