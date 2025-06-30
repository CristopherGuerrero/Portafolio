document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    
    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuIcon.classList.toggle('bx-x');
        });
    }

    // Navegación suave mejorada
    const navLinks = document.querySelectorAll('.navbar a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calcular posición considerando el header
                const offsetPosition = targetSection.offsetTop - 100;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Cerrar menú móvil si está abierto
                if (navbar.classList.contains('active')) {
                    navbar.classList.remove('active');
                    menuIcon.classList.remove('bx-x');
                }
                
                // Actualizar enlace activo después del scroll
                setTimeout(() => {
                    updateActiveMenu();
                }, 1000);
            }
        });
    });

    // Función mejorada para detectar sección activa
    function updateActiveMenu() {
        const scrollPosition = window.scrollY + (window.innerHeight / 2);
        let currentSection = null;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionBottom = sectionTop + sectionHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSection = section.getAttribute('id');
            }
        });
        
        if (currentSection) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        }
    }

    // Configurar el observer para detectar secciones visibles
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    // Observar todas las secciones
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Manejo del formulario de contacto
    document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensaje enviado (esto es una simulación)');
        this.reset();
    });
});
