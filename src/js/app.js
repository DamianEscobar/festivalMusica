document.addEventListener("DOMContentLoaded", function () {
    scrollNav();
    navFijo();
    crearGaleria();
    resaltarEnlace();
});

function navFijo () {
    const header = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');

    window.addEventListener('scroll', () => {
        if(sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    })
}

function crearGaleria() {
  const cantidadImagenes = 16;
  const galeria = document.querySelector(".galeria-imagenes");

  for (let i = 1; i <= cantidadImagenes; i++) {
    const imagen = document.createElement("IMG");
    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = "Imagen Galería";
    galeria.appendChild(imagen);

    //Event Handler
    imagen.onclick = function () {
      mostrarImagen(i);
    };
  }
}

function mostrarImagen(i) {
  const imagen = document.createElement("IMG");
  imagen.src = `src/img/gallery/full/${i}.jpg`;
  imagen.alt = "Imagen Galería";

  // Generar Modal
  const modal = document.createElement("DIV");
  modal.classList.add("modal");
  modal.onclick = cerrarModal;

  // Generar boton cerrar modal
  const btnCerrarModal = document.createElement('BUTTON');
  btnCerrarModal.textContent = 'X';
  btnCerrarModal.classList.add('btn-cerrar');
  btnCerrarModal.onclick = cerrarModal;

  modal.appendChild(imagen);
  modal.appendChild(btnCerrarModal);

  // Agregar el modal al body(HTML)
  const body = document.querySelector("body");
  body.classList.add("overflow-hidden");
  body.appendChild(modal);
}

// Remover el modal
function cerrarModal() {
    const modal = document.querySelector(".modal");
    modal.classList.add("fade-out");

    setTimeout(() => {
      const body = document.querySelector("body");
      body.classList.remove("overflow-hidden");

      modal?.remove();
    }, 500);
}

function resaltarEnlace () {
    document.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-princi a');

        let actual = '';
        sections.forEach( section => {
            // "offsetTop" dice la cantidad de pixeles que hay desde el comienzo del elemento hasta el elemento que lo contiene(elemento padre)
            const sectionTop = section.offsetTop
            // con "clientHeight" puede saber cuanto mide un elemento, osea su altura
            const sectionHeight = section.clientHeight

            if(window.scrollY >= (sectionTop - sectionHeight / 3)) {
                actual = section.id;
            }
        })
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === '#' + actual) {
                link.classList.add('active');
            }
        })
    })
}

function scrollNav() {
    const navLinks = document.querySelectorAll('.nav-princi a')

    navLinks.forEach(link => {
        link.addEventListener('click',(e) => {
            e.preventDefault()
            const sectionScroll = e.target.getAttribute('href');
            const section = document.querySelector(sectionScroll);
            section.scrollIntoView({behavior: 'smooth'});
        })
    });
}
