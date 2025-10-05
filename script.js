document.addEventListener('DOMContentLoaded', () => {

    /* ============================================== */
    /* 1. ANIMACIÓN DE SECCIONES AL HACER SCROLL (INTERSECTION OBSERVER) */
    /* ============================================== */

    const sections = document.querySelectorAll('.animated-section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // Si la sección es visible (intersecando)
            if (entry.isIntersecting) {
                // Remueve la clase 'section-hidden' para aplicar la transición de aparición
                entry.target.classList.remove('section-hidden');
                // Deja de observar esta sección para que la animación solo ocurra una vez
                observer.unobserve(entry.target);
            }
        });
    }, {
        // La animación se disparará cuando el 10% de la sección sea visible
        threshold: 0.1 
    });

    // CRÍTICO: Ocultamos las secciones con un pequeño retraso para evitar 'flashes'
    setTimeout(() => {
        sections.forEach(section => {
            // Nos aseguramos de que el Hero Section no esté oculto inicialmente.
            if (!section.id.includes('hero')) { 
                section.classList.add('section-hidden'); 
            }
            // Comenzamos a observar todas las secciones
            observer.observe(section);
        });
    }, 100); // 100ms de retraso para el ocultamiento inicial.


    /* ============================================== */
    /* 2. FUNCIONALIDAD DEL MODAL DE VIDEO (FACEBOOK REEL) */
    /* ============================================== */
    
    // Elementos del DOM
    const videoPlaceholder = document.getElementById('promo-video-placeholder');
    const videoModal = document.getElementById('video-modal');
    const modalVideoContainer = document.getElementById('modal-video-container'); // Contenedor del video
    const closeModalBtn = document.getElementById('close-modal'); // Botón de cierre

    // CRÍTICO: Obtener la URL del video directamente del data-attribute del HTML
    const facebookVideoUrl = videoPlaceholder ? videoPlaceholder.getAttribute('data-video-url') : null;
    
    // URL de embed responsiva (con autoplay=1 para que inicie al abrirse)
    const embedUrl = facebookVideoUrl 
        ? `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(facebookVideoUrl)}&show_text=false&width=1000&autoplay=1&t=0`
        : null;

    // 🎥 Crear el iframe que contendrá el video (se reutiliza)
    const videoIframe = document.createElement('iframe');
    videoIframe.setAttribute('allowFullScreen', 'true');
    videoIframe.setAttribute('allow', 'autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share');
    videoIframe.setAttribute('frameborder', '0');
    videoIframe.setAttribute('scrolling', 'no');
    videoIframe.classList.add('modal-iframe'); // Clase para estilos de tamaño/responsividad
    videoIframe.style.border = 'none';

    // FUNCIÓN PARA CERRAR Y DETENER EL VIDEO
    const closeModal = () => {
        videoModal.classList.remove('active');
        // CRÍTICO: Detener la reproducción del video de Facebook
        videoIframe.src = ''; 
        // Eliminamos el iframe del contenedor para asegurar una detención completa
        if (modalVideoContainer.contains(videoIframe)) {
            modalVideoContainer.removeChild(videoIframe);
        }
    };

    // FUNCIÓN PARA ABRIR Y REPRODUCIR EL VIDEO
    if (videoPlaceholder && embedUrl) {
        videoPlaceholder.addEventListener('click', () => {
            videoModal.classList.add('active');
            videoIframe.src = embedUrl;
            modalVideoContainer.appendChild(videoIframe);
        });
    }

    // 🖱️ Escucha el clic en el botón de cierre (X)
    closeModalBtn.addEventListener('click', closeModal);

    // 🖱️ Escucha el clic en el overlay (fuera del video)
    videoModal.addEventListener('click', (event) => {
        if (event.target === videoModal) {
            closeModal();
        }
    });
    
    // ⌨️ Escucha el evento de teclado (cerrar con ESC)
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && videoModal.classList.contains('active')) {
            closeModal();
        }
    });


    /* ============================================== */
    /* 3. INICIALIZACIÓN DE GOOGLE MAPS */
    /* ============================================== */

    function initMap() {
        const mapContainer = document.getElementById('map-container');
        if (!mapContainer) return; // Salir si el contenedor no existe

        // 📍 COORDENADAS: Reemplaza con la ubicación exacta de tu gimnasio
        const gymLocation = { lat: 4.5981, lng: -74.0758 }; // EJEMPLO: Bogotá, Colombia (Reemplaza!)

        // 🗺️ Opciones del Mapa
        const mapOptions = {
            center: gymLocation,
            zoom: 16,
            disableDefaultUI: false // Mantiene controles de zoom
        };

        // Creamos la instancia del mapa en el contenedor HTML
        const map = new google.maps.Map(mapContainer, mapOptions);

        // Añadimos un marcador
        new google.maps.Marker({
            position: gymLocation,
            map: map,
            title: 'BJJ Tribu Sur Tierra'
        });

        // Opcional: Se recomienda un InfoWindow
        const infoWindow = new google.maps.InfoWindow({
            content: '<h3>BJJ TRIBU SUR TIERRA</h3><p>¡Te esperamos en el tatami!</p>'
        });

        infoWindow.open(map, marker);
    }

    // El objeto 'google' de Google Maps solo existe si el script ha cargado.
    // Usamos esta comprobación para llamarla solo si la API ya está lista.
    if (window.google && window.google.maps) {
        initMap();
    } else {
        // Esto asegura que la función se llame cuando el script de Google Maps se cargue asíncronamente
        window.initMap = initMap;
    }
    
});