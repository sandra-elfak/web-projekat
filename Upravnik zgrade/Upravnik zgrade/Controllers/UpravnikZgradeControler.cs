using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Upravnik_zgrade.Models;


namespace Upravnik_zgrade.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UpravnikZgradeController : ControllerBase
    {
        public UpravnikZgradeContext _dbContext { get; set; }

        private static List<string> listaMeseci = new List<string>() { "januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"}; 

        public UpravnikZgradeController(UpravnikZgradeContext dbContext)
        {
            _dbContext = dbContext;
        }

        [Route("VratiListuZgrada")]
        [HttpGet]
        public async Task<IActionResult> VratiListuZgrada()
        {
            try
            {
                var listaZgrada = await _dbContext.Zgrade.Include(x => x.Stanovi).ToListAsync();
                return Ok(listaZgrada);
            }
            catch(Exception ex)
            {
                return BadRequest(new { error = "Problem pri pribavljanju liste zgrada" });
            }
        }

        [Route("IzmeniStan")]
        [HttpPut]
        public async Task<IActionResult> IzmeniStan([FromBody] DTOStan stan)
        {
            try
            {
                var stanZaImenu = await _dbContext.Stanovi.FindAsync(stan.Id);
                stanZaImenu.Vlasnik = stan.VlasnikIme;
                stanZaImenu.BrTelefona = stan.VlasnikMob;
                _dbContext.Stanovi.Update(stanZaImenu);
                _dbContext.SaveChanges();

                return Ok(stanZaImenu);
            }
            catch(Exception ex)
            {
                return BadRequest(new { error = "" });
            }
        }

        [Route("VratiTroskove")] 
        [HttpGet]
        public async Task<IActionResult> VratiTroskove(int stanId)
        {
            try
            {
                var stan = await _dbContext.Stanovi.Where(x => x.ID == stanId).Include(x => x.ListaTroskova).FirstOrDefaultAsync();
                if (stan != null)
                {
                    return Ok(stan.ListaTroskova);
                }
                else
                {
                    return StatusCode(403, new { error = "Zadati stan ne postoji" });
                }
            }
            catch(Exception ex)
            {
                return StatusCode(410, new { error = "Greska prilikom pribavljanja liste troskova" });
            }
        }

        [Route("DodajMesec")]
        [HttpPost]
        public async Task<IActionResult> DodajMesec([FromBody] DTOMesec mesec)
        {
            try
            {

                if (mesec.InternetCena < 0 || mesec.VodaCena < 0 || mesec.StrujaCena < 0)
                {
                    return StatusCode(403, new { error = "Cena dazbine ne sme biti negativna." });
                }
                else
                {
                    Stan stan = _dbContext.Stanovi.Find(mesec.StanId);
                    if (!listaMeseci.Contains(mesec.NazivMeseca.ToLower()))
                    {
                        return StatusCode(403, new { error = "Nevalidan mesec." });
                    }
                    Mesec noviMesec = new Mesec()
                    {
                        NazivMeseca = mesec.NazivMeseca,
                        StrujaCena = mesec.StrujaCena,
                        StrujaPlaceno = mesec.StrujaPlaceno,
                        Godina = mesec.Godina == 0 ? DateTime.Now.Year : mesec.Godina,
                        InternetCena = mesec.InternetCena,
                        InternetPlaceno = mesec.InternetPlaceno,
                        VodaCena = mesec.VodaCena,
                        VodaPlaceno = mesec.VodaPlaceno
                    };

                    noviMesec.Stan = stan;
                    _dbContext.Meseci.Add(noviMesec);
                    await _dbContext.SaveChangesAsync();

                    return Ok(noviMesec);
                }
            }
            catch(Exception ex)
            {
                return StatusCode(410, new { error = "Greska prilikom kreiranja meseca." });
            }
        }

        [Route("ObrisiMesec")]
        [HttpDelete]
        public async Task<IActionResult> ObrisiMesec(int id)
        {
            try
            {
                var mesec = _dbContext.Meseci.Find(id);
                if (mesec != null)
                {
                    _dbContext.Meseci.Remove(mesec);
                    await _dbContext.SaveChangesAsync();
                    return Ok(id);
                }
                else
                {
                    return StatusCode(403, new { error = "Zadati mesec ne postoji" });
                }
            }
            catch(Exception ex)
            {
                return StatusCode(410, new { error = "Greska prilikom brisanja meseca" });
            }
        }

        [Route("IzmeniMesec")]
        [HttpPut]
        public async Task<IActionResult> IzmeniMesec([FromBody]DTOMesec mesecZaIzmenu)
        {
            try
            {
                var mesec = _dbContext.Meseci.Find(mesecZaIzmenu.Id);
                if(mesec != null)
                {
                    mesec.InternetCena = mesecZaIzmenu.InternetCena;
                    mesec.VodaCena = mesecZaIzmenu.VodaCena;
                    mesec.StrujaCena = mesecZaIzmenu.StrujaCena;
                    mesec.InternetPlaceno = mesecZaIzmenu.InternetPlaceno;
                    mesec.VodaPlaceno = mesecZaIzmenu.VodaPlaceno;
                    mesec.StrujaPlaceno = mesecZaIzmenu.StrujaPlaceno;
                    _dbContext.Meseci.Update(mesec);
                    await _dbContext.SaveChangesAsync();
                    return Ok(mesec);
                }
                else
                {
                    return StatusCode(403, new { error = "Nije pronadjen mesec za izmenu" });
                }
            }
            catch(Exception ex)
            {
                return StatusCode(410, new { error = "Izmena meseca ne moze biti obavljena" });
            }
        }
    }
}
