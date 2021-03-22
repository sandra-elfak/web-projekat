using Microsoft.EntityFrameworkCore.Migrations;

namespace Upravnik_zgrade.Migrations
{
    public partial class mig1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Zgrada",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Grad = table.Column<string>(maxLength: 200, nullable: true),
                    Adresa = table.Column<string>(maxLength: 200, nullable: true),
                    Upravnik = table.Column<string>(maxLength: 200, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Zgrada", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Stan",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BrStana = table.Column<int>(nullable: false),
                    Vlasnik = table.Column<string>(maxLength: 255, nullable: true),
                    Kvadratura = table.Column<int>(nullable: false),
                    BrTelefona = table.Column<string>(maxLength: 255, nullable: true),
                    ZgradaID = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stan", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Stan_Zgrada_ZgradaID",
                        column: x => x.ZgradaID,
                        principalTable: "Zgrada",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Troskovi",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StrujaCena = table.Column<int>(nullable: false),
                    VodaCena = table.Column<int>(nullable: false),
                    InternetCena = table.Column<int>(nullable: false),
                    StrujaPlaceno = table.Column<bool>(nullable: false),
                    VodaPlaceno = table.Column<bool>(nullable: false),
                    InternetPlaceno = table.Column<bool>(nullable: false),
                    StanID = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Troskovi", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Troskovi_Stan_StanID",
                        column: x => x.StanID,
                        principalTable: "Stan",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Stan_ZgradaID",
                table: "Stan",
                column: "ZgradaID");

            migrationBuilder.CreateIndex(
                name: "IX_Troskovi_StanID",
                table: "Troskovi",
                column: "StanID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Troskovi");

            migrationBuilder.DropTable(
                name: "Stan");

            migrationBuilder.DropTable(
                name: "Zgrada");
        }
    }
}
