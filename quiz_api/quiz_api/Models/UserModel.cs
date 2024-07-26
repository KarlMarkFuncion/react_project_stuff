using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace quiz_api.Models
{
    [Table("Users")]
    public class UserModel
    {
        [Key]
        [Required]
        public int Id { get; set; }


    }
}
