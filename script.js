const message = document.getElementById('message');

message.addEventListener('click', () => {
    const randomColor = getRandomColor();
    message.style.color = randomColor;
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createWords() {
    const numWords = Math.floor(Math.random() * 15) + 10; // Genera entre 5 y 14 palabras cada vez
    for (let i = 0; i < numWords; i++) {
        const word = document.createElement('span');
        word.textContent = 'Te amo';
        word.classList.add('word');
        const left = Math.random() * window.innerWidth;
        const top = Math.random() * window.innerHeight;
        const color = getRandomColor(); // Obtiene un color aleatorio
        word.style.left = `${left}px`;
        word.style.top = `${top}px`;
        word.style.color = color; // Aplica el color aleatorio
        document.getElementById('rain-container').appendChild(word);

        // Eliminar la palabra después de un tiempo determinado
        setTimeout(() => {
            word.remove();
        }, 5000); // 5000 milisegundos = 5 segundos
    }
}

// Función para generar un color aleatorio en formato hexadecimal
function getRandomColor() {
    // Genera un componente de color en formato hexadecimal (entre 00 y FF)
    const component = () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    // Concatena los componentes de color (rojo, verde, azul) para formar el color hexadecimal
    return `#${component()}${component()}${component()}`;
}

// Crear nuevas palabras cada cierto intervalo de tiempo
setInterval(createWords, 1000); // 1000 milisegundos = 1 segundo