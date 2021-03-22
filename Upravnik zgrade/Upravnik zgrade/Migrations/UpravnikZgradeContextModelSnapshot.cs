﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Upravnik_zgrade.Models;

namespace Upravnik_zgrade.Migrations
{
    [DbContext(typeof(UpravnikZgradeContext))]
    partial class UpravnikZgradeContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.12")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Upravnik_zgrade.Models.Mesec", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID")
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Godina")
                        .HasColumnName("Godina")
                        .HasColumnType("int");

                    b.Property<int>("InternetCena")
                        .HasColumnName("InternetCena")
                        .HasColumnType("int");

                    b.Property<bool>("InternetPlaceno")
                        .HasColumnName("InternetPlaceno")
                        .HasColumnType("bit");

                    b.Property<string>("NazivMeseca")
                        .HasColumnName("NazivMeseca")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("StanID")
                        .HasColumnType("int");

                    b.Property<int>("StrujaCena")
                        .HasColumnName("StrujaCena")
                        .HasColumnType("int");

                    b.Property<bool>("StrujaPlaceno")
                        .HasColumnName("StrujaPlaceno")
                        .HasColumnType("bit");

                    b.Property<int>("VodaCena")
                        .HasColumnName("VodaCena")
                        .HasColumnType("int");

                    b.Property<bool>("VodaPlaceno")
                        .HasColumnName("VodaPlaceno")
                        .HasColumnType("bit");

                    b.HasKey("ID");

                    b.HasIndex("StanID");

                    b.ToTable("Mesec");
                });

            modelBuilder.Entity("Upravnik_zgrade.Models.Stan", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID")
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("BrStana")
                        .HasColumnName("BrStana")
                        .HasColumnType("int");

                    b.Property<string>("BrTelefona")
                        .HasColumnName("BrTelefona")
                        .HasColumnType("nvarchar(255)")
                        .HasMaxLength(255);

                    b.Property<int>("Kvadratura")
                        .HasColumnName("Kvadratura")
                        .HasColumnType("int");

                    b.Property<string>("Vlasnik")
                        .HasColumnName("Vlasnik")
                        .HasColumnType("nvarchar(255)")
                        .HasMaxLength(255);

                    b.Property<int?>("ZgradaID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("ZgradaID");

                    b.ToTable("Stan");
                });

            modelBuilder.Entity("Upravnik_zgrade.Models.Zgrada", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID")
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Adresa")
                        .HasColumnName("Adresa")
                        .HasColumnType("nvarchar(200)")
                        .HasMaxLength(200);

                    b.Property<string>("Grad")
                        .HasColumnName("Grad")
                        .HasColumnType("nvarchar(200)")
                        .HasMaxLength(200);

                    b.Property<string>("Upravnik")
                        .HasColumnName("Upravnik")
                        .HasColumnType("nvarchar(200)")
                        .HasMaxLength(200);

                    b.HasKey("ID");

                    b.ToTable("Zgrada");
                });

            modelBuilder.Entity("Upravnik_zgrade.Models.Mesec", b =>
                {
                    b.HasOne("Upravnik_zgrade.Models.Stan", "Stan")
                        .WithMany("ListaTroskova")
                        .HasForeignKey("StanID");
                });

            modelBuilder.Entity("Upravnik_zgrade.Models.Stan", b =>
                {
                    b.HasOne("Upravnik_zgrade.Models.Zgrada", "Zgrada")
                        .WithMany("Stanovi")
                        .HasForeignKey("ZgradaID");
                });
#pragma warning restore 612, 618
        }
    }
}
