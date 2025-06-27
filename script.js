document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar a');
    const allLinks = document.querySelectorAll('.navbar a, .services-box .btn'); // Select both navbar links and the "Ver más" buttons
    const sections = document.querySelectorAll('section');

    // Mostrar solo la sección home al cargar con animación
    document.getElementById('home').classList.add('section-active');

    allLinks.forEach(link => { // Loop through all relevant links
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior for all handled links

            // Determine if the clicked link is a main navbar link
            const isNavLink = this.closest('.navbar');

            // Remove active class from navbar links
            navLinks.forEach(item => item.classList.remove('active'));

            // If it's a navbar link, add 'active' class to it
            if (isNavLink) {
                this.classList.add('active');
            }

            // Hide all sections and remove 'section-active' class
            sections.forEach(section => {
                section.style.display = 'none';
                section.classList.remove('section-active');
            });

            // Get the target section ID from the href
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) { // Ensure the target section exists
                // Show the corresponding section with animation
                targetSection.style.display = 'flex';
                setTimeout(() => {
                    targetSection.classList.add('section-active');
                }, 10);

                // Smooth scroll to the top of the newly displayed section
                // This will scroll to the top of the 'portfolio' section in your case
                window.scrollTo({
                    top: targetSection.offsetTop, // Scroll to the top of the target section
                    behavior: 'smooth'
                });
            }
        });
    });

    // Menú móvil (opcional)
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuIcon.classList.toggle('bx-x');
        });
    }
});

// DELETE OR COMMENT OUT THESE BLOCKS COMPLETELY! They are causing the issue.
/*
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
    });
});
*/

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar a');
    const allLinks = document.querySelectorAll('.navbar a, .services-box .btn'); // Select both navbar links and the "Ver más" buttons
    const sections = document.querySelectorAll('section');

    // Mostrar solo la sección home al cargar con animación
    document.getElementById('home').classList.add('section-active');

    allLinks.forEach(link => { // Loop through all relevant links
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior for all handled links

            // Determine if the clicked link is a main navbar link
            const isNavLink = this.closest('.navbar');

            // Remove active class from navbar links
            navLinks.forEach(item => item.classList.remove('active'));

            // If it's a navbar link, add 'active' class to it
            if (isNavLink) {
                this.classList.add('active');
            }

            // Hide all sections and remove 'section-active' class
            sections.forEach(section => {
                section.style.display = 'none';
                section.classList.remove('section-active');
            });

            // Get the target section ID from the href
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) { // Ensure the target section exists
                // Show the corresponding section with animation
                targetSection.style.display = 'flex';
                setTimeout(() => {
                    targetSection.classList.add('section-active');
                }, 10);

                // Smooth scroll to the top of the newly displayed section
                // This will scroll to the top of the 'portfolio' section in your case
                window.scrollTo({
                    top: targetSection.offsetTop, // Scroll to the top of the target section
                    behavior: 'smooth'
                });
            }
        });
    });

    // Menú móvil (opcional)
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuIcon.classList.toggle('bx-x');
        });
    }
});

// DELETE OR COMMENT OUT THESE BLOCKS COMPLETELY! They are causing the issue.
/*
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
    });
});
*/
