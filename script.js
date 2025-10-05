document.addEventListener('DOMContentLoaded', () => {

    // ===========================================
    // ✅ CORRECCIÓN 1: ENLACES SOCIALES (Facebook / Instagram)
    // Se asignan los href correctos a todos los íconos sociales.
    // ===========================================
    document.querySelectorAll('.social-icon').forEach(icon => {
        const isFacebook = icon.querySelector('.fa-facebook-f');
        const isInstagram = icon.querySelector('.fa-instagram');
        
        if (isFacebook) {
            // Enlace de Facebook proporcionado por el usuario
            icon.href = 'https://www.facebook.com/profile.php?id=61577066638285';
            icon.target = '_blank';
        } else if (isInstagram) {
            // Enlace de Instagram proporcionado por el usuario
            icon.href = 'https://www.instagram.com/tribusurtierrabjj/';
            icon.target = '_blank';
        }
    });

    // ===========================================
    // ✅ CORRECCIÓN 2: BOTONES CTA DE LA SECCIÓN HERO
    // Se asignan los href a los botones del banner principal.
    // ===========================================

    // Botón "Únete a la Tribu Hoy" -> #contact
    const ctaPrimary = document.querySelector('.hero-section .btn.primary');
    if (ctaPrimary) {
        ctaPrimary.href = '#contact'; 
    }

    // Botón "Conoce Nuestra Filosofía" -> #about
    const ctaSecondary = document.querySelector('.hero-section .btn.secondary');
    if (ctaSecondary) {
        ctaSecondary.href = '#about'; 
    }


    // ===========================================
    // ✅ CORRECCIÓN 3: ENLACES RÁPIDOS EN CONTACTO (Para completar)
    // Asigna los enlaces a los botones de Facebook e Instagram en la sección de Contacto.
    // ===========================================
    
    // Busca los botones por su clase y su ícono
    const quickContactBtns = document.querySelectorAll('.quick-contact-grid a');
    quickContactBtns.forEach(btn => {
        const isFacebook = btn.querySelector('.fa-facebook');
        const isInstagram = btn.querySelector('.fa-instagram');
        
        if (isFacebook) {
            btn.href = 'https://www.facebook.com/profile.php?id=61577066638285';
        } else if (isInstagram) {
            btn.href = 'https://www.instagram.com/tribusurtierrabjj/';
        }
    });


    // =========================================================
    // 🚨 CONFIGURACIÓN DE DATOS DE FACEBOOK (ORIGINALMENTE AQUÍ) 🚨
    // =========================================================
    
    // Función de utilidad para limpiar las dimensiones de los iframes de Facebook
    // Esto es NECESARIO para que el CSS pueda hacer los videos responsivos (100% de ancho/alto)
    const cleanFacebookIframe = (iframeHTML) => {
        // Elimina los atributos width y height del iframe
        return iframeHTML
            .replace(/width=["']\d+["']/, '')
            .replace(/height=["']\d+["']/, '');
    };

    const FACEBOOK_CONFIG = {
        
        // 1. Video Promocional (Sección Filosofía)
        promoVideoIframe: cleanFacebookIframe(`<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1098564924960022%2F&show_text=false&width=357&t=0" width="357" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`),
        
        // Imagen para la previsualización del video promocional (URL de tu galería)
        promoVideoPlaceholderImage: 'https://scontent-bog2-2.xx.fbcdn.net/v/t39.30808-6/528043078_122122327778902221_2755474370179858457_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHxkRW-oAEt8NKOxwrjaDi2S_Yf5Xa6RM5L9h_ldrpEzlhnIeoX1B_Jckkrgro_fVwVkw6ATPaGsoeUfvMpaQ5P&_nc_ohc=qmDGsfABorQQ7kNvwENMBJ7&_nc_oc=Adk4n07N2vLg2jGxIk6FZX-8FG0gNVo62uhGBlsSDUPRviDFH5xrBHzEeeMyH7doTpU&_nc_zt=23&_nc_ht=scontent-bog2-2.xx&_nc_gid=4dKfgRL9EkBpqKQk-bStvQ&oh=00_AfdwV5H8lbueQZTTk-s9aKLsPEAEGgCGpOgCrfBVihm3cg&oe=68E8A624',

        // 2. URLs de las 3 imágenes para la Galería de Entrenamientos (FONDOS)
        galleryImageUrls: [
            'https://scontent-bog2-2.xx.fbcdn.net/v/t39.30808-6/518357860_122119475144902221_2041312994144610619_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGwVamFaljeuw9gZDrrnAugLDGcowFnRgMsMZyjAWdGAwjL3YJdaEMUxcWCGP-jJ_A8jLldEUVksb9-QRq3b5T6&_nc_ohc=siQCi019Me4Q7kNvwFxS4wG&_nc_oc=Adl145NgWK2i0AZKkRjFSQKq_NqFDqwH0N8vNCE6vkOf3UMFyFIOTibbgeCU26CcoAM&_nc_zt=23&_nc_ht=scontent-bog2-2.xx&_nc_gid=JY3jV-7dXoNCgDsJqd1Kvw&oh=00_Aff0XTnjfjPaQmC6lEFFEkl7JjwpvYiYrKF_tnlgGBcI8g&oe=68E88B59',
            'https://scontent-bog2-2.xx.fbcdn.net/v/t39.30808-6/528043078_122122327778902221_2755474370179858457_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHxkRW-oAEt8NKOxwrjaDi2S_Yf5Xa6RM5L9h_ldrpEzlhnIeoX1B_Jckkrgro_fVwVkw6ATPaGsoeUfvMpaQ5P&_nc_ohc=qmDGsfABorQQ7kNvwENMBJ7&_nc_oc=Adk4n07N2vLg2jGxIk6FZX-8FG0gNVo62uhGBlsSDUPRviDFH5xrBHzEeeMyH7doTpU&_nc_zt=23&_nc_ht=scontent-bog2-2.xx&_nc_gid=4dKfgRL9EkBpqKQk-bStvQ&oh=00_AfdwV5H8lbueQZTTk-s9aKLsPEAEGgCGpOgCrfBVihm3cg&oe=68E8A624',
            'https://scontent-bog2-1.xx.fbcdn.net/v/t39.30808-6/503887875_122097340862902221_3583741559825685378_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeESWVd4u4OSWEzKKUXM6N6U_k9rSUehX_j-T2tJR6Ff-MELRcRO18YqxfmHOjfuSHB3-_HFVps2E0N5kJBRnmtH&_nc_ohc=lxU007TZZ-kQ7kNvwHdhp7F&_nc_oc=AdlIy85pqqHSDSf3YCXMEhCm_q3etqpzlB5Groc60tJ-g5Y0j5NIMKaEKh2CrcOUOLA&_nc_zt=23&_nc_ht=scontent-bog2-1.xx&_nc_gid=GU_h9cA1nKGI-Ax92QXvnQ&oh=00_AfewWEBuaVVVy9tAmdVtFAMcAI8AcdPeTdl5HiBk7j4Qww&oe=68E8A0C5' // ***CORREGIDA: Esta es la nueva URL para la imagen 3***
        ],

        // 3. 5 IFrames para la Mini Galería (videos)
        miniGalleryIframes: [
            cleanFacebookIframe(`<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1275276607294583%2F&show_text=false&width=220&t=0" width="220" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`),
            cleanFacebookIframe(`<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F673372102234687%2F&show_text=false&width=267&t=0" width="267" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-picture-in-picture; web-share" allowFullScreen="true"></iframe>`),
            cleanFacebookIframe(`<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F23918417271144487%2F&show_text=false&width=267&t=0" width="267" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`),
            cleanFacebookIframe(`<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F702199182633394%2F&show_text=false&width=267&t=0" width="267" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`),
            cleanFacebookIframe(`<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1151681340162570%2F&show_text=false&width=267&t=0" width="267" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`)
        ]
    };

    // Estructura de la Mini Galería (5 elementos, todos videos de Facebook)
    const galleryItemsData = FACEBOOK_CONFIG.miniGalleryIframes.map((iframe, index) => ({
        id: `video_${index + 1}`,
        iframeHTML: iframe, 
        thumb: 'https://via.placeholder.com/120x80/2a2a2a/cccccc?text=VIDEO%20FB', // Miniatura genérica
        caption: `Video de Entrenamiento ${index + 1}`,
        type: 'iframe-fb' 
    }));
    // =========================================================

    // 1. GESTIÓN DE ANIMACIONES DE SECCIONES (Intersection Observer)
    const sections = document.querySelectorAll('.animated-section');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('section-hidden');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    sections.forEach(section => {
        section.classList.add('section-hidden');
        observer.observe(section);
    });

    // 2. GESTIÓN DEL MODAL DE VIDEO PROMOCIONAL
    const videoModal = document.getElementById('video-modal');
    const videoContainer = document.getElementById('modal-video-container');
    const placeholderVideo = document.getElementById('placeholder-video');
    const closeVideoBtn = document.getElementById('close-video-btn');

    const openVideoModal = () => {
        if (videoModal && videoModal.classList.contains('active')) return;
        
        // Inyecta el iframe de Facebook, ya limpio de dimensiones
        videoContainer.innerHTML = FACEBOOK_CONFIG.promoVideoIframe;
        videoModal.classList.add('active');
        
        // El CSS (que debe estar corregido) se encarga de hacerlo 100%
    };

    const closeVideoModal = () => {
        videoContainer.innerHTML = ''; // Detiene la reproducción
        videoModal.classList.remove('active');
    };

    if (placeholderVideo) {
        // Establecer el fondo del placeholder con la imagen de Facebook
        placeholderVideo.style.backgroundImage = `url('${FACEBOOK_CONFIG.promoVideoPlaceholderImage}')`;
        placeholderVideo.addEventListener('click', openVideoModal);
    }
    if (closeVideoBtn) {
        closeVideoBtn.addEventListener('click', closeVideoModal);
    }
    if (videoModal) {
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                closeVideoModal();
            }
        });
    }


    // 3. GESTIÓN DEL MODAL DE MINI GALERÍA
    const galleryModal = document.getElementById('gallery-modal');
    const closeGalleryBtn = document.getElementById('close-gallery-btn');
    const mainMediaPlaceholder = document.querySelector('.media-placeholder');
    const mediaCaption = document.querySelector('.media-caption');
    const thumbnailContainer = document.querySelector('.thumbnail-container');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Función para renderizar el contenido principal
    const renderMainMedia = (item) => {
        mainMediaPlaceholder.innerHTML = '';
        mediaCaption.textContent = item.caption;

        if (item.type === 'iframe-fb') {
            // Inyecta el iframe de Facebook, ya limpio
            mainMediaPlaceholder.innerHTML = item.iframeHTML;
            
            // Intenta hacer que el video se reproduzca automáticamente.
            const iframe = mainMediaPlaceholder.querySelector('iframe');
            if (iframe) {
                // Agregar autoplay al src (si Facebook lo soporta)
                if (!iframe.src.includes('autoplay')) {
                    iframe.src = iframe.src + '&autoplay=1';
                }
                // El CSS se encarga del 100% del tamaño
            }
        }
    };

    // Función que maneja el cambio de miniatura y la activa
    const activateThumbnail = (itemId) => {
        mainMediaPlaceholder.innerHTML = ''; // Detiene el video anterior
        document.querySelectorAll('.thumbnail-item').forEach(thumb => {
            thumb.classList.remove('active');
        });

        const activeThumb = document.getElementById(itemId);
        if (activeThumb) {
            activeThumb.classList.add('active');
            const item = galleryItemsData.find(d => d.id === itemId);
            if (item) {
                renderMainMedia(item);
            }
        }
    };

    // Renderizar las miniaturas para la barra lateral
    const renderThumbnails = () => {
        if (!thumbnailContainer) return;
        thumbnailContainer.innerHTML = '';

        galleryItemsData.forEach(item => {
            const thumbDiv = document.createElement('div');
            thumbDiv.classList.add('thumbnail-item');
            thumbDiv.id = item.id;
            
            let content = `<img src="${item.thumb}" alt="${item.caption}">`;
            content += `<i class="fas fa-play thumbnail-icon"></i>`; // Ícono de play
            
            thumbDiv.innerHTML = content;
            thumbDiv.addEventListener('click', () => activateThumbnail(item.id));
            
            thumbnailContainer.appendChild(thumbDiv);
        });
    };

    // Eventos para abrir el modal de galería (Cualquiera de las 3 imágenes)
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            renderThumbnails(); 
            galleryModal.classList.add('active');
            
            // Activa el PRIMER video al abrir el modal.
            activateThumbnail(galleryItemsData[0].id);
        });
    });

    // 4. INICIALIZACIÓN: Configura los fondos de las 3 imágenes de la Galería principal
    // (Esto usa la URL corregida para la imagen 3)
    galleryItems.forEach((item, index) => {
        if (FACEBOOK_CONFIG.galleryImageUrls[index]) {
            item.style.backgroundImage = `url('${FACEBOOK_CONFIG.galleryImageUrls[index]}')`;
        }
    });


    // 5. Cierre de modales
    if (closeGalleryBtn) {
        closeGalleryBtn.addEventListener('click', () => {
            galleryModal.classList.remove('active');
            mainMediaPlaceholder.innerHTML = ''; // Detiene el video
        });
    }

    if (galleryModal) {
        galleryModal.addEventListener('click', (e) => {
            if (e.target === galleryModal) {
                galleryModal.classList.remove('active');
                mainMediaPlaceholder.innerHTML = ''; // Detiene el video
            }
        });
    }
});