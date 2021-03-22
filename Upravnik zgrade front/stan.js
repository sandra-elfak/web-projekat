import { Mesec } from "./mesec.js";
import {prikaziProzorZaPromenuPodataka, obavestenje} from "./crtanje.js";
export class Stan {
	constructor(id, brStana , kvadratura, vlasnik, mob, zgrada){
		this.id = id;
        this.brStana = brStana;
		this.kvadratura = kvadratura;
		this.vlasnik = vlasnik;
		this.mob = mob;
		this.zgrada = zgrada;
        this.meseci = [];
        this.meseciKontejner = null;
        this.stanKontejner = null;
        this.stanInfoKontejner = null;
	}

    stampajStan(stanoviKontejner){

        this.stanKontejner = document.createElement("div");
        this.stanInfoKontejner = document.createElement("div");
        this.stanHeader = document.createElement("div");
        this.meseciKontejner = document.createElement("div");
        this.stanKontejner.className = "stan-kontejner";
        this.stanHeader.className = "stan-header";
        this.stanInfoKontejner.className = "stan-info-kontejner";
        this.meseciKontejner.className = "stan-meseci-kontejner";
        this.stanKontejner.appendChild(this.stanHeader);
        
        this.stampajInfo();

        stanoviKontejner.appendChild(this.stanKontejner);
        this.stanKontejner.appendChild(this.meseciKontejner);
    }

    stampajInfo(){
        this.stanInfoKontejner.innerHTML = "";
        const stanBroj = document.createElement("div");
        stanBroj.className = "kolona";
        stanBroj.innerHTML = `Stan br: ${this.brStana}`;
        
        const kvadraturaStana = document.createElement("div");
        kvadraturaStana.className = "kolona";
        kvadraturaStana.innerHTML = `Kvadratura: ${this.kvadratura}`;

        const vlasnikStana = document.createElement("div");
        vlasnikStana.className = "kolona";
        vlasnikStana.innerHTML = `Vlasnik: ${this.vlasnik}`;

        const mobVlasnika = document.createElement("div");
        mobVlasnika.className = "kolona";
        mobVlasnika.innerHTML = `Br. telefona: ${this.mob}`;

        const promeniButtonKolona = document.createElement("div");
        promeniButtonKolona.className = "kolona";
        const promeniButton = document.createElement("button");
        promeniButton.innerHTML = "Promeni";

        const prikaziTroskoveKolona = document.createElement("div");
        prikaziTroskoveKolona.className = "kolona prikazi-btn";
        const prikaziTroskoveButton = document.createElement("button");
        prikaziTroskoveButton.innerHTML = "Prikazi Troskove";

        const sakrijTroskoveKolona = document.createElement("div");
        sakrijTroskoveKolona.className = "kolona sakrij-btn";
        const sakrijTroskoveButton = document.createElement("button");
        sakrijTroskoveButton.innerHTML = "Sakrij Troskove";
        if(this.meseciKontejner.classList.contains('otvoreno')){
            prikaziTroskoveKolona.style.display = "none";
        }else {
            sakrijTroskoveKolona.style.display = "none";
        }

        this.stanInfoKontejner.appendChild(stanBroj);
        this.stanInfoKontejner.appendChild(kvadraturaStana);
        this.stanInfoKontejner.appendChild(vlasnikStana);
        this.stanInfoKontejner.appendChild(mobVlasnika);
        promeniButtonKolona.appendChild(promeniButton);
        this.stanInfoKontejner.appendChild(promeniButtonKolona);
        prikaziTroskoveKolona.appendChild(prikaziTroskoveButton);
        this.stanInfoKontejner.appendChild(prikaziTroskoveKolona);
        sakrijTroskoveKolona.appendChild(sakrijTroskoveButton);
        this.stanInfoKontejner.appendChild(sakrijTroskoveKolona);
        this.stanHeader.appendChild(this.stanInfoKontejner);
        
        promeniButton.onclick = (event) => {
            this.omoguciIzmenuStana();
        }

        prikaziTroskoveButton.onclick = (event) => {  
            var sakrijButton = this.stanInfoKontejner.querySelector(".sakrij-btn");
            var prikaziButton = this.stanInfoKontejner.querySelector(".prikazi-btn");
            if(sakrijButton && !this.meseciKontejner.classList.contains('otvoreno')){
                prikaziButton.style.display = "none";
                sakrijButton.style.display = "block";
                this.meseciKontejner.classList.add('otvoreno');
                this.stampajTroskove();
            }
        }

        sakrijTroskoveButton.onclick = (event) => {
            var sakrijButton = this.stanInfoKontejner.querySelector(".sakrij-btn");
            var prikaziButton = this.stanInfoKontejner.querySelector(".prikazi-btn");
            if(prikaziButton && this.meseciKontejner.classList.contains('otvoreno')){
                sakrijButton.style.display = "none";
                prikaziButton.style.display = "block";
                this.meseciKontejner.classList.remove('otvoreno');
            }
            this.meseciKontejner.innerHTML = "";
        }
    }

    stampajTroskove(){
        fetch('http://localhost:57578/UpravnikZgrade/VratiTroskove?stanId='+ this.id  ).then(
        p => {
            if(p.ok){
                p.json().then(data => {
                    this.meseciKontejner.innerHTML = "";
                    const dodajMesec = document.createElement("button");
                    dodajMesec.className = "dodaj-mesec";
                    dodajMesec.innerHTML = "+";
                    this.meseciKontejner.appendChild(dodajMesec);
                    dodajMesec.onclick = (event) => {
                        prikaziProzorZaPromenuPodataka(true, this, dodajMesec);
                    }
                    data.forEach( mesec => {
                        var mesec1 = new Mesec(mesec.id, mesec.strujaCena, mesec.vodaCena, mesec.internetCena, mesec.strujaPlaceno, mesec.vodaPlaceno, mesec.internetPlaceno, mesec.godina, mesec.nazivMeseca, this);
                        this.meseci.push(mesec1);

                        mesec1.stampajMesec(this.meseciKontejner);
                    });

                });
            }
            else if(p.status == 403 || p.status == 410){
                p.json().then(data => {
                    obavestenje(true, data.error);
                });
            }
            else{
                obavestenje(true, "Troskovi ne mogu biti vraceni");
            }
        });
    }

    omoguciIzmenuStana(){
        var infoKontejner = this.stanKontejner.querySelector('.stan-info-kontejner');
        infoKontejner.innerHTML = "";

        const stanBroj = document.createElement("div");
        stanBroj.className = "kolona";
        stanBroj.innerHTML = `Stan br: "${this.brStana}"`;
        
        const kvadraturaStana = document.createElement("div");
        kvadraturaStana.className = "kolona";
        kvadraturaStana.innerHTML = `Kvadratura: "${this.kvadratura}"`;

        const vlasnikStanaKolona = document.createElement("div");
        vlasnikStanaKolona.className = "kolona";
        const vlasnikStana = document.createElement("input");
        vlasnikStana.type = "text";
        vlasnikStana.name = "vlasnik";
        vlasnikStana.value =  this.vlasnik != null && this.vlasnik !== '' ? this.vlasnik : '';  

        const mobVlasnikaKolona = document.createElement("div");
        mobVlasnikaKolona.className = "kolona";
        const mobVlasnika = document.createElement("input");
        mobVlasnika.type = "text";
        mobVlasnika.name = "mob";
        mobVlasnika.value =  this.mob != null && this.mob !== '' ? this.mob : '';  

        const sacuvajButtonKolona = document.createElement("div");
        sacuvajButtonKolona.className = "kolona";
        const sacuvajButton = document.createElement("button");
        sacuvajButton.innerHTML = "Sacuvaj";

        const otkaziButtonKolona = document.createElement("div");
        otkaziButtonKolona.className = "kolona back";
        const otkaziButton = document.createElement("button");
        otkaziButton.innerHTML = "Back";

        infoKontejner.appendChild(stanBroj);
        infoKontejner.appendChild(kvadraturaStana);
        vlasnikStanaKolona.appendChild(vlasnikStana);
        infoKontejner.appendChild(vlasnikStanaKolona);
        mobVlasnikaKolona.appendChild(mobVlasnika);
        infoKontejner.appendChild(mobVlasnikaKolona);
        sacuvajButtonKolona.appendChild(sacuvajButton);
        infoKontejner.appendChild(sacuvajButtonKolona);
        otkaziButtonKolona.appendChild(otkaziButton);
        infoKontejner.appendChild(otkaziButtonKolona);

        sacuvajButton.onclick = (event) => {
            this.sacuvajIzmenuStana();
        }

        otkaziButton.onclick = (event) => {
            this.stampajInfo();
        }
    }

    sacuvajIzmenuStana(){
        var vlasnikIme = this.stanInfoKontejner.querySelector('input[name=vlasnik]').value;
        var vlasnikMob = this.stanInfoKontejner.querySelector('input[name=mob]').value;
        
        const updateData = { 
            id: this.id,
            vlasnikIme: vlasnikIme,
            vlasnikMob: vlasnikMob 
        };

        fetch('http://localhost:57578/UpravnikZgrade/IzmeniStan', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
        })
        .then(p => {
            if(p.ok){
                p.json().then(data => {
                    this.vlasnik = data.vlasnik;
                    this.mob = data.brTelefona;
                    this.stampajInfo();
                })
            }
            else if(p.status == 400 || p.status == 406 || p.status == 410) {
                p.json()
                .then(data => {
                    obavestenje(true, data.error);
                });
           }
            else{
                obavestenje(true, "Brisanje nije obavljeno");
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    }

}