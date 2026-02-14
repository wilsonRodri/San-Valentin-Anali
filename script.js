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

    const totalFotos = 31;

    for (let i = 1; i <= totalFotos; i++) {

        const img = document.createElement("img");
        img.src = `assets/img/recuerdos/foto${i}.jpg`;
        img.classList.add("fotoRecuerdo");

        // Posición horizontal totalmente libre
        img.style.left = Math.random() * 100 + "vw";

        // Duración aleatoria
        img.style.animationDuration = (15 + Math.random() * 15) + "s";

        // Delay diferente para que no salgan juntas
        img.style.animationDelay = Math.random() * 8 + "s";

        // Ligera rotación para efecto más natural
        img.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;

        // 🔥 Ahora se agregan directo al contenedor principal
        cartaFinal.appendChild(img);
    }
}

