import { Stan } from "./stan.js";
import { Mesec } from "./mesec.js";

export class Zgrada {
	constructor(id, grad, adresa){
		this.id = id;
		this.grad = grad;
        this.adresa = adresa;
		this.zgradaKartica = null;
        // this.headerKontejner = null;
        this.contentKontejner = null;
		this.stanovi = [];
	}

    stampajZgrada (levaStrana){

		this.zgradaKartica = document.createElement("div");
		this.zgradaKartica.className = "zgrada kartica";
		levaStrana.appendChild(this.zgradaKartica);

		this.stampajHeader();

		this.contentKontejner = document.createElement("div");
		this.contentKontejner.className = "stanovi-kontejner";
		this.zgradaKartica.appendChild(this.contentKontejner);
		this.stampajContent();

		
    }

    stampajHeader(){
        const zgradaKontejner = document.createElement("div");
        zgradaKontejner.className = 'zgrada-kontejner';
		const zgradaHeader = document.createElement("h3");
		zgradaHeader.innerHTML = `Zgrada na adresi: ${this.adresa}, ${this.grad}.`;
		zgradaKontejner.appendChild(zgradaHeader);

		this.zgradaKartica.appendChild(zgradaKontejner);

        const zgradaContent = document.createElement("div");
        zgradaContent.className = 'zgrada-kontejner';
    }

    stampajContent(){
        this.stanovi.forEach(stan => {
            stan.stampajStan(this.contentKontejner);
        });
    }

}