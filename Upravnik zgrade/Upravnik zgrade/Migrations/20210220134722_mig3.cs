using Microsoft.EntityFrameworkCore.Migrations;

namespace Upravnik_zgrade.Migrations
{
    public partial class mig3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Godina",
                table: "Mesec",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "NazivMeseca",
                table: "Mesec",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Godina",
                table: "Mesec");

            migrationBuilder.DropColumn(
                name: "NazivMeseca",
                table: "Mesec");
        }
    }
}
