
import {prikaziProzorZaPromenuPodataka, obavestenje} from "./crtanje.js";
export class Mesec {
	constructor(id, strujaCena , vodaCena, internetCena, struja, voda, internet, godina, nazivMeseca, stan){
		this.id = id;
        this.strujaCena = strujaCena ;
		this.vodaCena = vodaCena;
		this.internetCena = internetCena;
		this.struja = struja;
		this.voda = voda;
		this.internet = internet;
        this.godina = godina;
        this.nazivMeseca = nazivMeseca;
		this.stan = stan;
        this.mesecKontejner = null;
	}

	stampajMesec(meseciKontejner){
		this.mesecKontejner = null;
        this.mesecKontejner = document.createElement("div");
        this.mesecKontejner.className = "mesec-kontejner";
        this.crtajMesec();

        meseciKontejner.appendChild(this.mesecKontejner);
	}

    crtajMesec(){
        const nazivMesecaKontejner = document.createElement("div");
        nazivMesecaKontejner.className = "kolona";
        nazivMesecaKontejner.innerHTML = `Mesec: ${this.nazivMeseca} ${this.godina}.`;
        
        const strujaKontejner = document.createElement("div");
        strujaKontejner.className = "kolona";
        const strujaVrednost = document.createElement("span");
        strujaVrednost.innerHTML = `Struja: ${this.strujaCena} dinara`;
        strujaKontejner.appendChild(strujaVrednost);
        if(this.struja){
            strujaVrednost.className = "check-mark";
        } else {
            strujaVrednost.className = "false-mark";
        }
        
        const vodaKontejner = document.createElement("div");
        vodaKontejner.className = "kolona";
        const vodaVrednost = document.createElement("span");
        vodaVrednost.innerHTML = `Voda: ${this.vodaCena} dinara`;
        vodaKontejner.appendChild(vodaVrednost);
        if(this.voda){
            vodaVrednost.className = "check-mark";
        } else {
            vodaVrednost.className = "false-mark";
        }
        
        const internetKontejner = document.createElement("div");
        internetKontejner.className = "kolona";
        const internetVrednost = document.createElement("span");
        internetVrednost.innerHTML = `Internet: ${this.internetCena} dinara`;
        internetKontejner.appendChild(internetVrednost);
        if(this.internet){
            internetVrednost.className = "check-mark";
        } else {
            internetVrednost.className = "false-mark";
        }

        const izmeniButtonKontejner = document.createElement("div");
        izmeniButtonKontejner.className = "kolona";
        const izmeniButton = document.createElement("button");
        izmeniButton.innerHTML = "Izmeni";
        izmeniButton.className = "mali-btn";
        izmeniButtonKontejner.appendChild(izmeniButton);

        const izbrisiMesec =document.createElement("button");
        izbrisiMesec.innerHTML = "Izbrisi";
        izbrisiMesec.className = "mali-btn";
        izmeniButtonKontejner.appendChild(izbrisiMesec);

        

        izmeniButton.onclick = () => {
            prikaziProzorZaPromenuPodataka(false,this.stan,izmeniButton,this);
        }

        izbrisiMesec.onclick = () => {
            fetch('http://localhost:57578/UpravnikZgrade/ObrisiMesec?id='+this.id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                })
                .then(response => {
                    if(response.ok){
                        response.json()
                        .then(data => {
                            this.mesecKontejner.remove();
                        });
                    }
                    else if(response.status == 406 || response.status == 410) {
                            response.json()
                            .then(data => {
                                obavestenje( true, data.error)
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

        this.mesecKontejner.appendChild(nazivMesecaKontejner);
        this.mesecKontejner.appendChild(strujaKontejner);
        this.mesecKontejner.appendChild(vodaKontejner);
        this.mesecKontejner.appendChild(internetKontejner);
        this.mesecKontejner.appendChild(izmeniButtonKontejner);
    }

}