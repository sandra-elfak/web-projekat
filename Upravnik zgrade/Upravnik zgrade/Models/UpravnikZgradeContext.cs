using Microsoft.EntityFrameworkCore;

namespace Upravnik_zgrade.Models
{
    public class UpravnikZgradeContext : DbContext
    {
        public DbSet<Stan> Stanovi { get; set; }
        public DbSet<Mesec> Meseci { get; set; }
        public DbSet<Zgrada> Zgrade { get; set; }

        public UpravnikZgradeContext(DbContextOptions options) : base(options)
        {

        }
    }
}
