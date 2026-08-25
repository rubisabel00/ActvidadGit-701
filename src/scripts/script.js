// Script.js - Funcionalidades JavaScript

// Función para mostrar un mensaje al hacer clic en "Contáctanos"
function mostrarMensaje() {
    alert('¡Gracias por tu interés! Pronto estaremos en contacto contigo.');
}

// Marcar el enlace activo del menú según la página actual
document.addEventListener('DOMContentLoaded', function() {
    const enlacesNav = document.querySelectorAll('.navbar-nav .nav-link');
    const paginaActual = window.location.pathname.split('/').pop() || 'index.html';

    enlacesNav.forEach(enlace => {
        const href = enlace.getAttribute('href');
        if (href === paginaActual) {
            enlace.classList.add('active');
        } else {
            enlace.classList.remove('active');
        }
    });

    // Si estamos en index.html, marcar "Inicio" como activo
    if (paginaActual === '' || paginaActual === 'index.html') {
        enlacesNav.forEach(enlace => {
            if (enlace.getAttribute('href') === 'index.html') {
                enlace.classList.add('active');
            }
        });
    }
});

// Log de bienvenida en la consola
console.log('¡Bienvenido a Mi Sitio Web!');
