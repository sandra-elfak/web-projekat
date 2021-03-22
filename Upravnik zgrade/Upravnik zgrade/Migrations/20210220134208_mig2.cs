using Microsoft.EntityFrameworkCore.Migrations;

namespace Upravnik_zgrade.Migrations
{
    public partial class mig2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Troskovi_Stan_StanID",
                table: "Troskovi");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Troskovi",
                table: "Troskovi");

            migrationBuilder.RenameTable(
                name: "Troskovi",
                newName: "Mesec");

            migrationBuilder.RenameIndex(
                name: "IX_Troskovi_StanID",
                table: "Mesec",
                newName: "IX_Mesec_StanID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Mesec",
                table: "Mesec",
                column: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_Mesec_Stan_StanID",
                table: "Mesec",
                column: "StanID",
                principalTable: "Stan",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Mesec_Stan_StanID",
                table: "Mesec");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Mesec",
                table: "Mesec");

            migrationBuilder.RenameTable(
                name: "Mesec",
                newName: "Troskovi");

            migrationBuilder.RenameIndex(
                name: "IX_Mesec_StanID",
                table: "Troskovi",
                newName: "IX_Troskovi_StanID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Troskovi",
                table: "Troskovi",
                column: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_Troskovi_Stan_StanID",
                table: "Troskovi",
                column: "StanID",
                principalTable: "Stan",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
