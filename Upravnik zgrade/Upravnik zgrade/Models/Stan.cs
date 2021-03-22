using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Upravnik_zgrade.Models
{
    [Table("Stan")]
    public class Stan
    {
        [Key]
        [Column("ID")]
        public int ID { get; set; }

        [Column("BrStana")]
        public int BrStana { get; set; }

        [Column("Vlasnik")]
         public string Vlasnik { get; set; }

        [Column("Kvadratura")]
        public int Kvadratura { get; set; }

        [Column("BrTelefona")]
        [MaxLength(255)]
        public string BrTelefona { get; set; }

        public virtual List<Mesec> ListaTroskova { get; set; }

        [JsonIgnore]
        public Zgrada Zgrada { get; set; }
    }
}
