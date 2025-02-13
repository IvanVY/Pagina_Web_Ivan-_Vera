// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    alert("Bienvenido a la página educativa de programación.");
});

// Función para evaluar el quiz
function evaluarQuiz() {
    // Obtiene la respuesta seleccionada para la pregunta 1
    const respuestaSeleccionada = document.querySelector('input[name="q1"]:checked');

    // Verifica si el usuario seleccionó una respuesta
    if (!respuestaSeleccionada) {
        alert("Por favor, selecciona una respuesta.");
        return;
    }

    // Evalúa si la respuesta es correcta
    const respuestaCorrecta = "b"; // La respuesta correcta es "b"
    const resultadoElemento = document.getElementById("resultado");

    if (respuestaSeleccionada.value === respuestaCorrecta) {
        resultadoElemento.textContent = "¡Correcto! Una variable es un contenedor de datos.";
    } else {
        resultadoElemento.textContent = "Incorrecto. La respuesta correcta es 'b) Un contenedor de datos'.";
    }
}