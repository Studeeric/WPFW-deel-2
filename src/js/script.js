function pageSelector() {
    let page = window.location.href;
    let startIndex = page.lastIndexOf("html/") + 5;
    let endIndex = page.lastIndexOf(".html");
    let result = page.slice(startIndex, endIndex);
    var x = document.getElementById(result);
    x.classList.add("active");
}

let babyAantal = 0;
let kindAantal = 0;
let tienerAantal = 0;
let volwassenAantal = 0;
let seniorAantal = 0;
let totaalprijs = 0;
let gekocht = false;

function onTicketClick(id) {
    gekocht = false;
    if (id == "babyKnop") {
        babyAantal += 1;
        document.getElementById("prijs__baby").innerHTML = "Baby tickets: " + babyAantal + "x " + "<a id='babyMin' class='lijstKnop' onclick='onMinClick(this.id)'>-</a>";
    }
    if (id == "kindKnop") {
        kindAantal += 1;
        document.getElementById("prijs__kind").innerHTML = "Kinder tickets: " + kindAantal + "x " + "<a id='kindMin' class='lijstKnop' onclick='onMinClick(this.id)'>-</a>";
    }
    if (id == "tienerKnop") {
        tienerAantal += 1;
        document.getElementById("prijs__tiener").innerHTML = "Tiener tickets: " + tienerAantal + "x " + "<a id='tienerMin' class='lijstKnop' onclick='onMinClick(this.id)'>-</a>";
    }
    if (id == "volwassenKnop") {
        volwassenAantal += 1;
        document.getElementById("prijs__volwassen").innerHTML = "Volwassen tickets: " + volwassenAantal + "x " + "<a id='volwassenMin' class='lijstKnop' onclick='onMinClick(this.id)'>-</a>";
    }
    if (id == "seniorKnop") {
        seniorAantal += 1;
        document.getElementById("prijs__senior").innerHTML = "Senioren tickets: " + seniorAantal + "x " + "<a id='seniorMin' class='lijstKnop' onclick='onMinClick(this.id)'>-</a>";
    }
    prijsberekening();
}

function prijsberekening() {
    let babyPrijs = babyAantal * 10
    let kindPrijs = kindAantal * 15
    let tienerPrijs = tienerAantal * 20
    let volwassenPrijs = volwassenAantal * 25
    let seniorPrijs = seniorAantal * 20
    totaalprijs = babyPrijs + kindPrijs + tienerPrijs + volwassenPrijs + seniorPrijs
    if (totaalprijs > 0) {
        document.getElementById("prijs__totaal").innerHTML = "Totaalprijs: € " + totaalprijs + "<a onclick='KoopNu()'><div class='lijstKnop'>KOOP</div></a>";
    }
    if (totaalprijs <= 0) {
        if (!gekocht) {
            document.getElementById("prijs__totaal").innerHTML = "Selecteer uw kaartjes";
        } else {
            document.getElementById("prijs__totaal").innerHTML = "Bedankt voor uw aankoop. Veel plezier!"
        }
    }
}

function onMinClick(id) {
    gekocht = false;
    if (id == "babyMin") {
        babyAantal -= 1;
        if (babyAantal > 0) {
            document.getElementById("prijs__baby").innerHTML = "Baby tickets: " + babyAantal + "x " + "<a id='babyMin' class='lijstKnop' onclick='onMinClick(this.id)'>-</a>";
        } else {
            document.getElementById("prijs__baby").innerHTML = "";
        }
    }
    if (id == "kindMin") {
        kindAantal -= 1;
        if (kindAantal > 0) {
            document.getElementById("prijs__kind").innerHTML = "Kinder tickets: " + kindAantal + "x " + "<a id='kindMin' class='lijstKnop' onclick='onMinClick(this.id)'>-</a>";
        } else {
            document.getElementById("prijs__kind").innerHTML = "";
        }
    }
    if (id == "tienerMin") {
        tienerAantal -= 1;
        if (tienerAantal > 0) {
            document.getElementById("prijs__tiener").innerHTML = "Tiener tickets: " + tienerAantal + "x " + "<a id='tienerMin' class='lijstKnop' onclick='onMinClick(this.id)'>-</a>";
        } else {
            document.getElementById("prijs__tiener").innerHTML = "";
        }
    }
    if (id == "volwassenMin") {
        volwassenAantal -= 1;
        if (volwassenAantal > 0) {
            document.getElementById("prijs__volwassen").innerHTML = "Volwassen tickets: " + volwassenAantal + "x " + "<a id='volwassenMin' class='lijstKnop' onclick='onMinClick(this.id)'>-</a>";
        } else {
            document.getElementById("prijs__volwassen").innerHTML = "";
        }
    }
    if (id == "seniorMin") {
        seniorAantal -= 1;
        if (seniorAantal > 0) {
            document.getElementById("prijs__senior").innerHTML = "Senioren tickets: " + seniorAantal + "x " + "<a id='seniorMin' class='lijstKnop' onclick='onMinClick(this.id)'>-</a>";
        } else {
            document.getElementById("prijs__senior").innerHTML = "";
        }
    }
    prijsberekening();
}

function KoopNu() {
    babyAantal = 0;
    kindAantal = 0;
    tienerAantal = 0;
    volwassenAantal = 0;
    seniorAantal = 0;
    document.getElementById("prijs__baby").innerHTML = "";
    document.getElementById("prijs__kind").innerHTML = "";
    document.getElementById("prijs__tiener").innerHTML = "";
    document.getElementById("prijs__volwassen").innerHTML = "";
    document.getElementById("prijs__senior").innerHTML = "";
    gekocht = true;
    prijsberekening();
}