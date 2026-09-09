const forma = document.getElementById("kontakt-forma");

const ime = document.getElementById("ime");
const prezime = document.getElementById("prezime");
const email = document.getElementById("email");
const telefon = document.getElementById("telefon");
const poruka = document.getElementById("poruka");

const porukaForme = document.getElementById("poruka-forme");


forma.addEventListener("submit", function (dogadjaj) {

    dogadjaj.preventDefault();

    const vrednostImena = ime.value.trim();
    const vrednostPrezimena = prezime.value.trim();
    const vrednostEmaila = email.value.trim();
    const vrednostTelefona = telefon.value.trim();
    const vrednostPoruke = poruka.value.trim();


    // PROVERA IMENA
    if (vrednostImena.length < 2) {

        porukaForme.textContent =
            "Ime mora sadržati najmanje dva slova.";

        return;
    }


    // PROVERA PREZIMENA
    const prezimeObrazac =
        /^[A-Za-zČĆŽŠĐčćžšđ ]{2,}$/;

    if (!prezimeObrazac.test(vrednostPrezimena)) {

        porukaForme.textContent =
            "Prezime može sadržati samo slova.";

        return;
    }


    // PROVERA EMAIL ADRESE
    const emailObrazac =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailObrazac.test(vrednostEmaila)) {

        porukaForme.textContent =
            "Unesite ispravnu email adresu.";

        return;
    }


    // PROVERA TELEFONA
    const telefonObrazac =
        /^[0-9+\/ -]{6,20}$/;

    if (!telefonObrazac.test(vrednostTelefona)) {

        porukaForme.textContent =
            "Unesite ispravan broj telefona.";

        return;
    }


    // PROVERA PORUKE
    if (vrednostPoruke.length < 10) {

        porukaForme.textContent =
            "Poruka mora sadržati najmanje 10 karaktera.";

        return;
    }


    // SVE JE ISPRAVNO
    porukaForme.textContent =
        "Forma je uspešno popunjena.";

});