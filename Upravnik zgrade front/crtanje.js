import { Mesec } from "./mesec.js";
function kreiranjeKontejnera() {
    var body = document.body;
    if(body){
        const kontejner = document.createElement("div");
        kontejner.className = "kontejner";
        body.appendChild(kontejner);

        const obavestenje = document.createElement("div");
        obavestenje.className = "obavestenje sakrij";
        body.appendChild(obavestenje);

        const levaStrana = document.createElement("div");
        levaStrana.className = "leva-strana";
        kontejner.appendChild(levaStrana);

        const desnaStrana = document.createElement("div");
        desnaStrana.className = "desna-strana sakrij";

        const zgrada = document.createElement("div");
        zgrada.className = "zgrada separator";
        zgrada.innerHTML = "zgrada: ";

        const stan = document.createElement("div");
        stan.className = "stan separator";
        stan.innerHTML = "stan: ";

        const mesec = document.createElement("div");
        mesec.className = "mesec separator";
        mesec.innerHTML = "mesec: ";

        const dodajMesec = document.createElement("div");
        dodajMesec.className = "mesec-dodati separator";
        const mesecLabel = document.createElement("label");
        mesecLabel.innerHTML = "Mesec: ";
        const dodatiMesecInput = document.createElement("input");
        dodatiMesecInput.type = "text";
        dodatiMesecInput.name = "dodajMesec";
            
        const godinaKontejner = document.createElement("div");
        godinaKontejner.className = "godina-kontejner separator";
        const godinaLabel = document.createElement("label");
        godinaLabel.innerHTML = "Godina: ";
        const godinaInput = document.createElement("input");
        godinaInput.type = "text";
        godinaInput.name = "godina";
        
        dodajMesec.appendChild(mesecLabel);
        dodajMesec.appendChild(dodatiMesecInput);
        godinaKontejner.appendChild(godinaLabel);
        godinaKontejner.appendChild(godinaInput);

        // Struja
        const struja = document.createElement("div");
        struja.className = "struja separator";
        const strujaLabel = document.createElement("label");
        strujaLabel.className = "input-label";
        strujaLabel.innerHTML = "Struja: ";
        const stujaInput = document.createElement("input");
        stujaInput.type = "text";
        stujaInput.name = "struja";
        
        const strujaCheckboxBtnLabel = document.createElement("label");
        strujaCheckboxBtnLabel.className = "checkbox-label";
        strujaCheckboxBtnLabel.innerHTML = "Placeno:";
        const strujaCheckboxBtn = document.createElement("input");
        strujaCheckboxBtn.type = "checkbox";
        strujaCheckboxBtn.name = "checkboxStruja";
        
        struja.appendChild(strujaLabel);
        struja.appendChild(strujaCheckboxBtnLabel);
        struja.appendChild(stujaInput);
        struja.appendChild(strujaCheckboxBtn);

        // Voda
        const voda = document.createElement("div");
        voda.className = "voda separator";
        const vodaLabel = document.createElement("label");
        vodaLabel.className = "input-label";
        vodaLabel.innerHTML = "Voda: ";
        const vodaInput = document.createElement("input");
        vodaInput.type = "text";
        vodaInput.name = "voda";
        
        const vodaCheckboxBtn = document.createElement("input");
        vodaCheckboxBtn.type = "checkbox";
        vodaCheckboxBtn.name = "checkboxVoda";
        const vodaCheckboxBtnLabel = document.createElement("label");
        vodaCheckboxBtnLabel.className = "checkbox-label";
        vodaCheckboxBtnLabel.innerHTML = "Placeno:";

        voda.appendChild(vodaLabel);
        voda.appendChild(vodaCheckboxBtnLabel);
        voda.appendChild(vodaInput);
        voda.appendChild(vodaCheckboxBtn);


        // Internet 
        const internet = document.createElement("div");
        internet.className = "internet separator";
        const internetLabel = document.createElement("label");
        internetLabel.className = "input-label";
        internetLabel.innerHTML = "Internet: ";
        const internetInput = document.createElement("input");
        internetInput.type = "text";
        internetInput.name = "internet";
        
        const internetCheckboxBtn = document.createElement("input");
        internetCheckboxBtn.type = "checkbox";
        internetCheckboxBtn.name = "checkboxInternet";
        const internetCheckboxBtnLabel = document.createElement("label");
        internetCheckboxBtnLabel.className = "checkbox-label";
        internetCheckboxBtnLabel.innerHTML = "Placeno:";

        internet.appendChild(internetLabel);
        internet.appendChild(internetCheckboxBtnLabel);
        internet.appendChild(internetInput);
        internet.appendChild(internetCheckboxBtn);

        kontejner.appendChild(desnaStrana);


        const buttonKontejner = document.createElement("div");
        buttonKontejner.className = "separator";
        const sacuvaj = document.createElement("button");
        sacuvaj.innerHTML = "Sacuvaj";
        sacuvaj.className = "sacuvaj-izmene";
        buttonKontejner.appendChild(sacuvaj);

        const zatvori = document.createElement("button");
        zatvori.innerHTML = '<svg aria-hidden="true" focusable="false" viewBox="0 0 40 40"><path fill="currentColor" d="M23.868 20.015L39.117 4.78c1.11-1.108 1.11-2.77 0-3.877-1.109-1.108-2.773-1.108-3.882 0L19.986 16.137 4.737.904C3.628-.204 1.965-.204.856.904c-1.11 1.108-1.11 2.77 0 3.877l15.249 15.234L.855 35.248c-1.108 1.108-1.108 2.77 0 3.877.555.554 1.248.831 1.942.831s1.386-.277 1.94-.83l15.25-15.234 15.248 15.233c.555.554 1.248.831 1.941.831s1.387-.277 1.941-.83c1.11-1.109 1.11-2.77 0-3.878L23.868 20.015z"></path> </svg>';
        zatvori.className = "zatvori-btn";


        const desnaKartica = document.createElement("div");
        desnaKartica.className = "kartica";
        desnaStrana.appendChild(desnaKartica);
        desnaKartica.appendChild(zatvori);

        desnaKartica.appendChild(zgrada);
        desnaKartica.appendChild(stan);
        desnaKartica.appendChild(mesec);
        desnaKartica.appendChild(dodajMesec);
        desnaKartica.appendChild(godinaKontejner);
        desnaKartica.appendChild(struja);
        desnaKartica.appendChild(voda);
        desnaKartica.appendChild(internet);
        desnaKartica.appendChild(buttonKontejner);

        return levaStrana;
    } 
}

function prikaziProzorZaPromenuPodataka(dodavanje, stan, trigger, mesec = null){
    var desnaStrana = document.querySelector('.desna-strana');
    if(desnaStrana){
        desnaStrana.classList.remove('sakrij');


        desnaStrana.querySelector('.zgrada').innerHTML = "Zgrada: " + stan.zgrada.adresa;
        desnaStrana.querySelector('.stan').innerHTML = "Stan: " + stan.brStana;
        
        var mesecSelektor = desnaStrana.querySelector('.mesec');
        var mesecZaDodavanjeSelektor = desnaStrana.querySelector('.mesec-dodati');
        var godinaKontejnerSelektor = desnaStrana.querySelector('.godina-kontejner');
        var godinaSelektor = desnaStrana.querySelector('input[name="godina"]');
        var strujaSelektor = desnaStrana.querySelector('input[name="struja"]');
        var checkboxStrujaSelector = desnaStrana.querySelector('input[name="checkboxStruja"]');
        var vodaSelektor = desnaStrana.querySelector('input[name="voda"]');
        var checkboxVodaSelector = desnaStrana.querySelector('input[name="checkboxVoda"]');
        var internetSelektor = desnaStrana.querySelector('input[name="internet"]');
        var checkboxInternetSelector = desnaStrana.querySelector('input[name="checkboxInternet"]');

        
        var zatvoriPopup = desnaStrana.querySelector('.zatvori-btn');
        if(zatvoriPopup){
            zatvoriPopup.onclick = (event) => {
                if(mesecSelektor){ mesecSelektor.innerHTML = ''; }
                if(desnaStrana.querySelector('.mesec-dodati input')){ desnaStrana.querySelector('.mesec-dodati input').value = ''; }
                if(godinaSelektor){ godinaSelektor.value = ''; }
                if(strujaSelektor){ strujaSelektor.value = '' }
                if(checkboxStrujaSelector){ checkboxStrujaSelector.checked = false }
                if(vodaSelektor){ vodaSelektor.value = '' }
                if(checkboxVodaSelector){ checkboxVodaSelector.checked = false }
                if(internetSelektor){ internetSelektor.value = '' }
                if(checkboxInternetSelector){ checkboxInternetSelector.checked = false }
                if(!desnaStrana.classList.contains('sakrij')){
                    desnaStrana.classList.add('sakrij');
                }
            }
        }

        if(dodavanje){
            if(mesecZaDodavanjeSelektor.classList.contains('sakrij')){
                mesecZaDodavanjeSelektor.classList.remove('sakrij');
            }
            if(godinaKontejnerSelektor.classList.contains('sakrij')){
                godinaKontejnerSelektor.classList.remove('sakrij');
            }
            if(!mesecSelektor.classList.contains('sakrij')){
                mesecSelektor.classList.add('sakrij');
            }
        }else {
            mesecSelektor.classList.remove('sakrij');
            mesecZaDodavanjeSelektor.classList.add('sakrij');
            godinaKontejnerSelektor.classList.add('sakrij');
            mesecSelektor.innerHTML = "Mesec: " + mesec.nazivMeseca + " " + mesec.godina;

            strujaSelektor.value = mesec.strujaCena;
            if(mesec.struja){
                checkboxStrujaSelector.checked = mesec.struja;
            }
            vodaSelektor.value = mesec.vodaCena;
            if(mesec.voda){
                checkboxVodaSelector.checked = mesec.voda;
            }
            internetSelektor.value = mesec.internetCena;
            if(mesec.internet){
                checkboxInternetSelector.checked = mesec.internet;
            }
        }

        desnaStrana.querySelector('.sacuvaj-izmene').onclick = (event) => {
            const nazivMeseca = desnaStrana.querySelector('input[name="dodajMesec"]').value;
            const cenaStruje = isNaN(parseInt(strujaSelektor.value)) ? 0 : parseInt(strujaSelektor.value);
            const strujaPlacena = checkboxStrujaSelector.checked ? true : false;
            const cenaVode = isNaN(parseInt(vodaSelektor.value)) ? 0 : parseInt(vodaSelektor.value);
            const vodaPlacena = checkboxVodaSelector.checked ? true : false;
            const cenaInterneta = isNaN(parseInt(internetSelektor.value)) ? 0 : parseInt(internetSelektor.value);
            const internetPlacen = checkboxInternetSelector.checked ? true : false;
            const godina = isNaN(parseInt(godinaSelektor.value)) ? 0 : parseInt(godinaSelektor.value);
            const createData = {
                strujaCena : cenaStruje,
                strujaPlaceno : strujaPlacena,
                godina : godina,
                internetCena : cenaInterneta,
                internetPlaceno : internetPlacen,
                vodaCena : cenaVode,
                VodaPlaceno : vodaPlacena,
                stanId: stan.id
            };
            if(dodavanje){
                createData.nazivMeseca = nazivMeseca;
                fetch('http://localhost:57578/UpravnikZgrade/DodajMesec', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(createData)
                })
                .then(p => {
                    if(p.ok){
                        p.json().then(data => {
                            var newMesec = new Mesec(data.id, data.strujaCena, data.vodaCena, data.internetCena, data.strujaPlaceno, data.vodaPlaceno, data.internetPlaceno, data.godina, data.nazivMeseca, stan);
                            stan.meseci.push(newMesec);
                            var meseciKontejner = trigger.parentElement;
                            if(meseciKontejner.classList.contains('stan-meseci-kontejner')){
                                newMesec.stampajMesec(meseciKontejner);
                                zatvoriPopup.click();
                                obavestenje(false, "Uspesno ste dodali mesec.");
                            }                     
                        });
                    } else if (p.status == 403) {
                        console.log('p',p);
                        p.json().then(data => {
                            obavestenje(true, data.error);
                        });
                    }
                }).catch((error) => {
                    console.error('Error:', error);
                });
            }else {
                createData.id = mesec.id;
                fetch('http://localhost:57578/UpravnikZgrade/IzmeniMesec', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(createData)
                })
                .then(p => {
                    if(p.ok){
                        p.json().then(data => {
                            mesec.strujaCena = data.strujaCena;
                            mesec.internetCena = data.internetCena;
                            mesec.vodaCena = data.vodaCena; 
                            mesec.struja = data.strujaPlaceno;
                            mesec.voda = data.vodaPlaceno;
                            mesec.internet = data.internetPlaceno;
                            mesec.godina = data.godina;
                            mesec.nazivMeseca = data.nazivMeseca;
                            mesec.mesecKontejner.innerHTML = "";
                            mesec.crtajMesec();
                            zatvoriPopup.click();

                            obavestenje(false, "Uspesno ste izmenili mesec.")
                                                    
                        });
                    } else if (p.status == 406) {
                       
                    }
                }).catch((error) => {
                    console.error('Error:', error);
                });
            }
            desnaStrana.classList.add("sakrij");
        }
    }
}

function obavestenje( error, poruka){
    var obavestenje = document.querySelector('.obavestenje.sakrij');
    if(obavestenje && obavestenje.classList.contains('sakrij')){
       obavestenje.classList.remove('sakrij');
       if(error){
            obavestenje.classList.add('error');
       }
       obavestenje.innerHTML = poruka;
       setTimeout(function(){ 
            obavestenje.innerHTML = ""; 
            if(error){
                obavestenje.classList.remove('error');
            }
           obavestenje.classList.add('sakrij');
       }, 2000);
   }
};

export {kreiranjeKontejnera,prikaziProzorZaPromenuPodataka, obavestenje};