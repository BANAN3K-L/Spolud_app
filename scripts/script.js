const PARTNERI = new Date(2025, 9, 21, 0, 0, 0);

let POCET_MESICU = 0;
let POCET_DNU = 0;

function pad(cislo){
    return String(cislo).padStart(2, "0");
}



function dlouho_spolu(){
    const ROKY_SPOLU = document.getElementById("pocet-let");
    const MESICE_SPOLU = document.getElementById("pocet-mesicu");
    const DNY_SPOLU = document.getElementById("pocet-dnu");
    const HODIN_SPOLU = document.getElementById("pocet-hodin");
    const MINUT_SPOLU = document.getElementById("pocet-minut");
    const SEKUND_SPOLU = document.getElementById("pocet-sekund");

    const ted = new Date();

    let roky = ted.getFullYear() - PARTNERI.getFullYear();
    let mesice = ted.getMonth() - PARTNERI.getMonth();
    let days = ted.getDate() - PARTNERI.getDate();
    let hours = ted.getHours() - PARTNERI.getHours();
    let minutes = ted.getMinutes() - PARTNERI.getMinutes();
    let seconds = ted.getSeconds() - PARTNERI.getSeconds();

    if (seconds < 0){
        seconds += 60;
        minutes--;
    }

    if (minutes < 0){
        minutes += 60;
        hours--;
    }

    if (hours < 0){
        hours += 24;
        days--;
    }

    if (days < 0){
        const predchozi_mesic = new Date(ted.getFullYear(), ted.getMonth(), 0);
        days += predchozi_mesic.getDate();
        mesice--;
    }

    if (mesice < 0){
        mesice += 12;
        roky--;
    }

    POCET_MESICU = mesice;
    POCET_DNU = days;

    ROKY_SPOLU.innerText = pad(roky);
    MESICE_SPOLU.innerText = pad(mesice);
    DNY_SPOLU.innerText = pad(days);
    HODIN_SPOLU.innerText = pad(hours);
    MINUT_SPOLU.innerText = pad(minutes);
    SEKUND_SPOLU.innerText = pad(seconds);

    // console.log(ROKY_SPOLU.innerText);
}


function pocet_dni_v_mesici(rok, mesic){
    return new Date(rok, mesic, 0).getDate();
}

function vyroci(){
    const VYROCI_M = document.getElementById("vyroci-mesic");
    const VYROCI_D = document.getElementById("vyroci-den");

    let rok = new Date().getFullYear();

    let mesice = 12 - POCET_MESICU;
    let dny = - POCET_DNU;

    if (dny < 0){
        mesice -= 1;
        dny += pocet_dni_v_mesici(rok, POCET_MESICU);
    }

    if (mesice < 10){
        mesice = "0" + mesice;
    }

    if (dny < 10){
        dny = "0" + dny;
    }
    VYROCI_M.innerText = mesice;
    VYROCI_D.innerText = dny;
}




function motivace(){
    const MOTIVACE = document.getElementById("motivace-text");

    const motivace_vety = [
        "Dneska jsi silná/ý a dokážeš všechno!",
        "Každý krok vpřed se počítá.",
        "Tvá odhodlanost je silnější než strach.",
        "Máš v sobě nekonečný potenciál.",
        "Úsměv dnes může změnit celý den.",
        "Věř si, jsi skvělá/skvělý!",
        "Každý den je nová příležitost.",
        "Dnes můžeš dokázat něco úžasného.",
        "Síla je v tvé vytrvalosti.",
        "Jsi schopná/ý překonat všechny překážky.",
        "Tvá energie inspiruje ostatní.",
        "Neboj se snít velké sny.",
        "Malé kroky vedou k velkým výsledkům.",
        "Máš právo být šťastná/ý.",
        "Dnes udělej něco jen pro sebe.",
        "Tvá odvaha je tvou supermocí.",
        "Vše, co potřebuješ, máš už v sobě.",
        "Každý den je šance začít znovu.",
        "Tvá přítomnost dává světu hodnotu.",
        "Dnes se neboj být sama/sám sebou.",
        "Všechno, co se stane, je pro tvůj růst.",
        "Jsi inspirací pro lidi kolem sebe.",
        "Tvá práce a úsilí se vyplatí.",
        "Máš sílu změnit svůj den k lepšímu.",
        "Nikdy se nevzdávej svých snů.",
        "Dnes udělej krok k tomu, co miluješ.",
        "Tvá radost je nakažlivá.",
        "Jsi hodná/hodný obdivu a respektu.",
        "Každá překážka tě činí silnější/ším.",
        "Dnes je tvůj den zazářit!"
    ];

    const nahodna_veta = motivace_vety[Math.floor(Math.random() * motivace_vety.length)];
    MOTIVACE.innerText = '"' + nahodna_veta + '"';
}



motivace();

dlouho_spolu();
setInterval(dlouho_spolu, 1000);

vyroci();
setInterval(vyroci, 600000);

// narozeiny_ondra();
// setInterval(narozeiny_ondra, 600000);

// narozeniny_kate();
// setInterval(narozeniny_kate, 600000);
