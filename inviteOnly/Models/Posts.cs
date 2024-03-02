using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Collections.Generic;
using inviteOnly.Models;
using inviteOnly.Models;

namespace TabloidFullStack.Models

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

        [DisplayName("Published")]
        [DataType(DataType.Date)]
        public DateTime? PublishDateTime { get; set; }

        public bool IsApproved { get; set; }

     

        [DisplayName("Author")]
        public int UserProfileId { get; set; }
        public UserProfile? User { get; set; }
    }
}
