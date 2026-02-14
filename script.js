const siBtn = document.getElementById("siBtn");
const noBtn = document.getElementById("noBtn");

const pantallaInicial = document.getElementById("pantallaInicial");
const pantallaFeliz = document.getElementById("pantallaFeliz");
const cartaFinal = document.getElementById("cartaFinal");

let escalaSi = 1;
let contadorNo = 0;

const mensajesNo = [
    "¿Estás segura?",
    "¿En serio?",
    "No me querés acaso mujer??",
    "Piénsalo bien 🥺",
    "Última oportunidad..."
];

noBtn.addEventListener("click", () => {

    if (contadorNo < mensajesNo.length) {
        noBtn.textContent = mensajesNo[contadorNo];
        contadorNo++;
    }

    escalaSi += 0.2;
    siBtn.style.transform = `scale(${escalaSi})`;
});


siBtn.addEventListener("click", () => {

    pantallaInicial.classList.add("hidden");
    pantallaFeliz.classList.remove("hidden");

    setTimeout(() => {
        pantallaFeliz.classList.add("hidden");
        cartaFinal.classList.remove("hidden");
        generarRecuerdos();
    }, 4000);

});


function generarRecuerdos() {

    const izquierda = document.querySelector(".izquierda");
    const derecha = document.querySelector(".derecha");

    const totalFotos = 31;

    for (let i = 1; i <= totalFotos; i++) {

        const img = document.createElement("img");
        img.src = `assets/img/recuerdos/foto${i}.jpg`;
        img.classList.add("fotoRecuerdo");

        img.style.left = Math.random() * 100 + "vw";
        img.style.animationDuration = (6 + Math.random() * 6) + "s";
        img.style.animationDelay = Math.random() * 5 + "s";
        img.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;

        if (i % 2 === 0) {
            izquierda.appendChild(img);
        } else {
            derecha.appendChild(img);
        }
    }
}
