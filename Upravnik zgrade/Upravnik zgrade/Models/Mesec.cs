using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Upravnik_zgrade.Models
{
    [Table("Mesec")]
    public class Mesec
    {
        [Key]
        [Column("ID")]
        public int ID { get; set; }

        [Column("StrujaCena")]
        public int StrujaCena { get; set; }

        [Column("VodaCena")]
        public int VodaCena { get; set; }

        [Column("InternetCena")]
        public int InternetCena { get; set; }

        [Column("StrujaPlaceno")]
        public bool StrujaPlaceno { get; set; }

        [Column("VodaPlaceno")]
        public bool VodaPlaceno { get; set; }

        [Column("InternetPlaceno")]
        public bool InternetPlaceno { get; set; }

        [Column("Godina")]
        public int Godina { get; set; }

        [Column("NazivMeseca")]
        public string NazivMeseca { get; set; }

        [JsonIgnore]
        public Stan Stan { get; set; }
    }
}
