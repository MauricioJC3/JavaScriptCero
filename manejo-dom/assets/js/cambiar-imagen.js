const btnCambiar = document.querySelector('#cambiarImagen');
const imagen = document.querySelector('#imagenCambiar');

let imagenOriginal = 'assets/img/imagen1.png';
let imagenAlternativa = 'assets/img/imagen2.jpg';

btnCambiar.addEventListener('click', () => {
    /* 
    * si la imagen original es la imagen actual, 
    * cambiar por la alternativa, 
    * si no me devolvera la imagen original
    */
    imagen.src = imagen.src.includes(imagenOriginal) ? imagenAlternativa : imagenOriginal;
});
