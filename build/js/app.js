document.addEventListener('DOMContentLoaded', function() {
    crearGaleria()
})

function crearGaleria() {
    const cantidadImagenes = 16;
    const galeria = document.querySelector('.galeria-imagenes')

    for(let i = 1; i <= cantidadImagenes; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `src/img/gallery/full/${i}.jpg`;
        imagen.alt = 'Imagen Galería';
        galeria.appendChild(imagen);

        //Event Handler
        imagen.onclick = function() {
            mostrarImagen(i)
        }
    }
}

function mostrarImagen (i) {
    const imagen = document.createElement('IMG');
    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = 'Imagen Galería';

    // Generar Modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal')
    modal.onclick = () => {
        const modal = document.querySelector('.modal');
        modal.classList.add('fade-out');

        setTimeout(() => {
            const body = document.querySelector('body')
            body.classList.remove('overflow-hidden')

            modal?.remove();
        }, 500);

    }
    modal.appendChild(imagen);

    // Agregar el modal al body(HTML)
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)
}