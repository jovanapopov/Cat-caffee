// =============================
// PRONALAŽENJE HTML ELEMENATA
// =============================

const dugmeTema =
    document.getElementById("dugme-tema");

const smanjiFont =
    document.getElementById("smanji-font");

const povecajFont =
    document.getElementById("povecaj-font");


// =============================
// SVETLA / TAMNA TEMA
// =============================

// Čitamo ranije sačuvanu temu
const sacuvanaTema =
    localStorage.getItem("tema");


// Ako je bila izabrana tamna tema,
// uključujemo je pri učitavanju stranice
if (sacuvanaTema === "tamna") {

    document.body.classList.add(
        "tamna-tema"
    );

}


// Klik na dugme za temu
dugmeTema.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "tamna-tema"
        );


        // Ako sada postoji tamna tema
        if (
            document.body.classList.contains(
                "tamna-tema"
            )
        ) {

            localStorage.setItem(
                "tema",
                "tamna"
            );

        } else {

            localStorage.setItem(
                "tema",
                "svetla"
            );

        }

    }
);


// =============================
// VELIČINA FONTA
// =============================

// Čitamo prethodno sačuvanu veličinu
const sacuvaniFont =
    localStorage.getItem("font");


// Ako je korisnik ranije izabrao veliki font
if (sacuvaniFont === "veliki") {

    document.body.classList.add(
        "veliki-font"
    );

}


// Ako je ranije izabrao mali font
if (sacuvaniFont === "mali") {

    document.body.classList.add(
        "mali-font"
    );

}


// =============================
// POVEĆANJE FONTA
// =============================

povecajFont.addEventListener(
    "click",
    function () {

        document.body.classList.remove(
            "mali-font"
        );

        document.body.classList.add(
            "veliki-font"
        );

        localStorage.setItem(
            "font",
            "veliki"
        );

    }
);


// =============================
// SMANJENJE FONTA
// =============================

smanjiFont.addEventListener(
    "click",
    function () {

        document.body.classList.remove(
            "veliki-font"
        );

        document.body.classList.add(
            "mali-font"
        );

        localStorage.setItem(
            "font",
            "mali"
        );

    }
);

// =============================
// SLAJDER SLIKA
// =============================

const slike = [
    "slike/maca1.jpg",
    "slike/maca2.jpg",
    "slike/maca3.jpg"
];

let trenutnaSlika = 0;

const slikaSlajdera =
    document.getElementById("slika-slajdera");

const prethodnaSlika =
    document.getElementById("prethodna-slika");

const sledecaSlika =
    document.getElementById("sledeca-slika");


// SLEDEĆA SLIKA

sledecaSlika.addEventListener("click", function () {

    trenutnaSlika++;

    if (trenutnaSlika >= slike.length) {
        trenutnaSlika = 0;
    }

    slikaSlajdera.src = slike[trenutnaSlika];

});


// PRETHODNA SLIKA

prethodnaSlika.addEventListener("click", function () {

    trenutnaSlika--;

    if (trenutnaSlika < 0) {
        trenutnaSlika = slike.length - 1;
    }

    slikaSlajdera.src = slike[trenutnaSlika];

});