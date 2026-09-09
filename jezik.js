const srDugme = document.getElementById("sr-jezik");
const enDugme = document.getElementById("en-jezik");

function promeniJezik(jezik) {
    fetch(jezik + ".json")
        .then(function (odgovor) {
            if (!odgovor.ok) {
                throw new Error("JSON fajl nije učitan.");
            }
            return odgovor.json();
        })
        .then(function (tekstovi) {
            const elementi = document.querySelectorAll("[data-i18n]");

            elementi.forEach(function (element) {
                const kljuc = element.getAttribute("data-i18n");

                if (tekstovi[kljuc] !== undefined) {
                    element.textContent = tekstovi[kljuc];
                }
            });

            document.documentElement.lang = jezik === "en" ? "en" : "sr";
            localStorage.setItem("jezik", jezik);

            if (srDugme && enDugme) {
                srDugme.classList.toggle("aktivan-jezik", jezik === "sr");
                enDugme.classList.toggle("aktivan-jezik", jezik === "en");
            }
        })
        .catch(function (greska) {
            console.error("Greška pri promeni jezika:", greska);
        });
}

if (srDugme && enDugme) {
    srDugme.addEventListener("click", function () {
        promeniJezik("sr");
    });

    enDugme.addEventListener("click", function () {
        promeniJezik("en");
    });

    const sacuvaniJezik = localStorage.getItem("jezik") || "sr";
    promeniJezik(sacuvaniJezik);
}
