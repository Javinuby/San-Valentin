document.getElementById("open-button").addEventListener("click", function () {
    const coverScreen = document.getElementById("cover-screen"); // Pantalla de la carta
    const closedLetter = document.getElementById("closed-letter"); // Imagen de la carta
    const container = document.querySelector(".container"); // Contenido principal

    // Animación de apertura de la carta
    closedLetter.classList.add("opening");

    // Esperar 0.5s para ocultar la carta y mostrar el contenido principal
    setTimeout(() => {
        coverScreen.classList.add("hidden"); // Oculta la carta y el botón
        container.classList.remove("hidden"); // Asegura que el contenedor sea visible
        container.classList.add("visible"); // Muestra la propuesta con animación
    }, 500);
});

function showMessage(response) {
    const questionText = document.getElementById("question");
    const responseText = document.getElementById("response-text");
    const responseImage = document.getElementById("response-image");
    const messageDiv = document.getElementById("message");
    const noButton = document.getElementById("no-button");
    const yesButton = document.getElementById("yes-button");
    const nameText = document.getElementById("name"); // "Hey preciosa"


    if (response === "No") {
        // Cambiar el texto y el color cuando presiona "No"
        questionText.textContent = "¡No puedes escapar! 😈";
        questionText.style.color = "#ff0000"; // Rojo intenso
        
        nameText.style.display = "none";

        document.getElementById("main-image").src = "images/gun.gif";


        // Mover el botón "No"
        const maxWidth = window.innerWidth - noButton.offsetWidth;
        const maxHeight = window.innerHeight - noButton.offsetHeight;
        noButton.style.position = "absolute";
        noButton.style.left = Math.random() * maxWidth + "px";
        noButton.style.top = Math.random() * maxHeight + "px";
    } 
    
    if (response === "Si") {
        // Eliminar botones
        yesButton.remove();
        noButton.remove();
        
        // Cambiar la imagen principal a "dance.gif"
        document.getElementById("main-image").src = "images/dance.gif";

        nameText.style.display = "none";

        
        // Cambiar el texto y el color
        questionText.innerHTML = "¡Sabía que dirías que sí! 🤑";
        questionText.classList.add("question-lower"); // Agrega margen superior
        questionText.style.color = "#ff1493"; // Rosa fuerte

        // Mostrar mensaje final
        responseText.textContent = "Te quiero mucho 💗💗";
        messageDiv.classList.remove("hidden");
        responseImage.classList.remove("hidden");


        
        const nubyImage = document.getElementById("nuby-image");
        nubyImage.classList.remove("hidden");


    }
}
