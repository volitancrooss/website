const nav = document.querySelector("#nav");
const abrir = document.querySelector("#open");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener ("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener ("click", () => {
    nav.classList.remove("visible");
})

const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".popup .close");
const popupMessage = document.getElementById("popup-message");
// Obtener el contador de visitas del localStorage
let visitCount = localStorage.getItem("visitCount") || 0;
visitCount = parseInt(visitCount, 10) + 1;

// Guardar el nuevo contador de visitas en el localStorage
localStorage.setItem("visitCount", visitCount);

popupMessage.innerHTML = `¡Bienvenido Nuevamente a nuestra web! Has visitado esta página <strong>${visitCount} veces.</strong>`;

// Mostrar el pop-up cada 3 visitas
if (visitCount % 3 === 0) {
    popup.style.display = "block";
    
}

// Cerrar el pop-up al hacer clic en el botón de cerrar
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});