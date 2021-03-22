using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Upravnik_zgrade.Models
{
    [Table("Zgrada")]
    public class Zgrada
    {
        [Key]
        [Column("ID")]
        public int ID { get; set; }

        [Column("Grad")]
        [MaxLength(200)]
        public string Grad { get; set; }

        [Column("Adresa")]
        [MaxLength(200)]
        public string Adresa { get; set; }

        [Column("Upravnik")]
        [MaxLength(200)]
        public string Upravnik { get; set; }

        public virtual List<Stan> Stanovi { get; set; }

    }
}
