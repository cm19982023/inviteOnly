using System.ComponentModel.DataAnnotations;


namespace inviteOnly.Models
{
    public class UserProfile
    {
        public int Id { get; set; }

        [Required]

        public string UserName { get; set; }

        [Required]

        public string Bio { get; set; }


        [Required]
        [DataType(DataType.EmailAddress)]
        [MaxLength(255)]
        public string Email { get; set; }

        public DateTime DateCreated { get; set; }

    }
}
