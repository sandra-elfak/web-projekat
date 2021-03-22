import {Zgrada} from "./zgrada.js";
import {Stan} from "./stan.js";
import {Mesec} from "./mesec.js";
import {kreiranjeKontejnera, obavestenje} from "./crtanje.js";

fetch("http://localhost:57578/UpravnikZgrade/VratiListuZgrada").then(
p => {
	if(p.ok){
		p.json().then(data => {
			var levaStr = kreiranjeKontejnera();
			if(levaStr){
				data.forEach( zgrada => {
					var zgrada1 = new Zgrada(zgrada.id, zgrada.grad, zgrada.adresa);
					zgrada.stanovi.forEach(stan => {
						var stan1 = new Stan(stan.id, stan.brStana , stan.kvadratura, stan.vlasnik, stan.brTelefona, zgrada1);
						zgrada1.stanovi.push(stan1);
					});
					zgrada1.stampajZgrada(levaStr);
				});
	
			} else {
				throw new Error("Body ne postoji.");
			}
		});
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

});

