const mostrarOcultar = document.querySelector('#mostraryocultar');
const ocultar = document.querySelector('#ocultar');
const mostrar = document.querySelector('#mostrar');

ocultar.addEventListener('click', () => {
    mostrarOcultar.style.display = 'none';
} )

mostrar.addEventListener('click', () => {
    mostrarOcultar.style.display = 'block';
} )

