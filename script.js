// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobileMenu = document.getElementById('close-mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Close mobile menu if open
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Hero Text Animation
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.getElementById('hero-title');
    const heroTagline = document.getElementById('hero-tagline');
    const heroSubtext = document.getElementById('hero-subtext');
    const heroCta = document.getElementById('hero-cta');
    
    if (heroTitle) setTimeout(() => heroTitle.classList.add('animate'), 200);
    if (heroTagline) setTimeout(() => heroTagline.classList.add('animate'), 600);
    if (heroSubtext) setTimeout(() => heroSubtext.classList.add('animate'), 1000);
    if (heroCta) setTimeout(() => heroCta.classList.add('animate'), 1400);
});

// Lazy Load Images
document.addEventListener('DOMContentLoaded', function() {
    let lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
    
    if ('IntersectionObserver' in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazy');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });
        
        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});

// Filter Buttons for Events
const filterButtons = document.querySelectorAll('.events-filter button');
const eventCards = document.querySelectorAll('.event-card');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            eventCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Form Validation
const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic form validation
        let isValid = true;
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        
        if (isValid) {
            // Here you would typically send the form data to a server
            alert('Form submitted successfully!');
            form.reset();
        }
    });
});

// Tab switching functionality
const tabButtons = document.querySelectorAll('.tab-button');
const galleryGrids = document.querySelectorAll('.gallery-grid');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and grids
        tabButtons.forEach(btn => btn.classList.remove('active'));
        galleryGrids.forEach(grid => grid.classList.remove('active'));

        // Add active class to clicked button and corresponding grid
        button.classList.add('active');
        const targetGrid = document.getElementById(`${button.dataset.tab}-grid`);
        if (targetGrid) {
            targetGrid.classList.add('active');
            // Lazy load videos when video tab is active
            if (button.dataset.tab === 'videos') {
                lazyLoadVideos();
            }
        }
    });
});

// Video lazy loading
function lazyLoadVideos() {
    const videos = document.querySelectorAll('video[data-src]');
    videos.forEach(video => {
        if (!video.src) {
            const source = video.querySelector('source');
            if (source) {
                source.src = video.dataset.src;
                video.load();
            }
        }
    });
}
