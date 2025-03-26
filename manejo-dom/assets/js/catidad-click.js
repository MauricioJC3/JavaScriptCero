const contadorClick = document.querySelector('#contadorClick');
const btnClick = document.querySelector('#btnClick');

let contador = 0;

btnClick.addEventListener('click', () => {
    contador++;
    contadorClick.innerText = contador;
})

export default contadorClick;
export { btnClick };