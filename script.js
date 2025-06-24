document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');
    
    // Mostrar solo la sección home al cargar con animación
    document.getElementById('home').classList.add('section-active');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover clases activas
            navLinks.forEach(item => item.classList.remove('active'));
            sections.forEach(section => {
                section.style.display = 'none';
                section.classList.remove('section-active');
            });
            
            // Añadir clase active al link clickeado
            this.classList.add('active');
            
            // Mostrar la sección correspondiente con animación
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            targetSection.style.display = 'flex';
            setTimeout(() => {
                targetSection.classList.add('section-active');
            }, 10);
            
            // Desplazamiento suave
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    // Menú móvil (opcional)
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    
    if(menuIcon) {
        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuIcon.classList.toggle('bx-x');
        });
    }
});