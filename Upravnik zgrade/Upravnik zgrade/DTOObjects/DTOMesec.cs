using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Upravnik_zgrade
{
    public class DTOMesec
    {
        public int Id { get; set; }

        public int StrujaCena { get; set; }

        public int VodaCena { get; set; }

        public int InternetCena { get; set; }

        public bool StrujaPlaceno { get; set; }

        public bool VodaPlaceno { get; set; }

        public bool InternetPlaceno { get; set; }

        public int Godina { get; set; }

        public string NazivMeseca { get; set; }
        public int StanId { get; set; }
    }
}
