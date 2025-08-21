// Initialize particles.js
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#00f0ff", "#ff2bd6", "#9b5cff", "#39ff14"]
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00f0ff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Event modal functionality
    const eventModal = document.getElementById('event-modal');
    const closeModal = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDate = document.getElementById('modal-date');
    const modalDescription = document.getElementById('modal-description');
    const modalLineup = document.getElementById('modal-lineup');
    let getTicketsBtn = eventModal.querySelector('button.neon-btn:first-child');

    
    // Sample event data
    const events = {
        1: {
            title: "Lydia B Kollins",
            image: "assets/events/16.jpg",
            date: "Manchester • September 10",
            description: "Get ready, UK! The fierce, fabulous, and unforgettable Lydia B. Kollins from RuPaul’s Drag Race is storming the stage with a show that’s louder, prouder, and pinker than ever before!",
            lineup: [{ name: "Manchester", time: "Sep 10", genre: "Show" },],
            ticketLink: "https://www.eventbrite.co.uk/e/dfiu-events-presents-lydia-b-kollins-manchester-tickets-1554988675989?aff=oddtdtcreator"
        },
        2: {
            title: "Lydia B Kollins",
            image: "assets/events/15.jpg",
            date: "Glassgow • September 9",
            description: "Get ready, UK! The fierce, fabulous, and unforgettable Lydia B. Kollins from RuPaul’s Drag Race is storming the stage with a show that’s louder, prouder, and pinker than ever before!",
            lineup: [{ name: "Glassgow", time: "Sep 9", genre: "Show" },],
            ticketLink: "https://www.eventbrite.co.uk/e/dfiu-events-glasgow-presents-lydia-b-kollins-tickets-1588151918139?aff=oddtdtcreator"
        },
        3: {
            title: "Lydia B Kollins",
            image: "assets/events/14.jpeg",
            date: "Glassgow • September 8",
            description: "Get ready, UK! The fierce, fabulous, and unforgettable Lydia B. Kollins from RuPaul’s Drag Race is storming the stage with a show that’s louder, prouder, and pinker than ever before!",
            lineup: [{ name: "Glassgow", time: "Sep 8", genre: "Show" },],
            ticketLink: "https://www.eventbrite.co.uk/e/dfiu-events-presents-lydia-b-kollins-tickets-1554986800379?aff=oddtdtcreator"
        },
        4: {
            title: "Haus of Aja",
            image: "assets/events/12.jpg",
            date: "Australia Tour • Melbourne Nov 20 - Brisbane Nov 23",
            description: "Join us at DFIU Events Presents: Haus of Aja in Glasgow for a night of fierce performances and fabulous drag!",
            lineup: [
                { name: "Melbourne", time: "Nov 20", genre: "Show" },
                { name: "Adelaide", time: "Nov 21", genre: "Show" },
                { name: "Sydney", time: "Nov 22", genre: "Show" },
                { name: "Brisbane", time: "Nov 23", genre: "Show" }],
                ticketLink: "https://www.itdevents.com/"
        },
        5: {
            title: "Haus of Aja",
            image: "assets/events/11.jpg",
            date: "Amsterdam • Aug 24",
            description: "Join us at DFIU Events Presents: Haus of Aja in Amsterdam for a night of fierce performances and fabulous drag!",
            lineup: [{ name: "Panama Amsterdam", time: "Aug 24", genre: "Show" }],
            ticketLink: "https://www.eventbrite.co.uk/e/dfiu-events-presents-the-haus-of-aja-amsterdam-tickets-1388296234409?aff=oddtdtcreator"
        },
        6: {    
            title: "Haus of Aja",
            image: "assets/events/10.jpg",
            date: "Bologna • Aug 23",
            description: "Join us at DFIU Events Presents: Haus of Aja in Bologna for a night of fierce performances and fabulous drag!",
            lineup: [{ name: "Red Bologna Bologna", time: "Aug 23", genre: "Show" }],
            ticketLink: "https://www.eventbrite.co.uk/e/dfiu-events-presents-the-haus-of-aja-bologna-tickets-1388317026599?aff=oddtdtcreator"
        },
    };
    
    // Event details button click listener
    document.querySelectorAll('.event-details-btn').forEach(button => {
        button.addEventListener('click', function() {
        const eventId = this.getAttribute('data-event');
        const event = events[eventId];
        
        modalTitle.textContent = event.title;
        modalImage.src = event.image;
        modalDate.textContent = event.date;
        modalDescription.textContent = event.description;
        
        modalLineup.innerHTML = '';
        event.lineup.forEach(artist => {
            const artistEl = document.createElement('div');
            artistEl.className = 'bg-gray-800 p-4 rounded-lg';
            artistEl.innerHTML = `
                <h4 class="font-bold text-lg mb-1">${artist.name}</h4>
                <p class="text-cyan-400 mb-1">${artist.time}</p>
                <p class="text-gray-400">${artist.genre}</p>
            `;
            modalLineup.appendChild(artistEl);
        });
        
        // Replace GET TICKETS button and update reference
        let newBtn = getTicketsBtn.cloneNode(true);
        getTicketsBtn.parentNode.replaceChild(newBtn, getTicketsBtn);
        getTicketsBtn = newBtn;

        getTicketsBtn.addEventListener('click', () => {
            if (event.ticketLink) {
                window.open(event.ticketLink, '_blank');
            } else {
                alert('Tickets not available.');
            }
        });

        // ✅ Show the modal
        eventModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});
    
    // Close modal
    closeModal.addEventListener('click', function() {
        eventModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    eventModal.addEventListener('click', function(e) {
        if (e.target === eventModal) {
            eventModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    


    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeLightbox = document.getElementById('close-lightbox');
    
    document.querySelectorAll('.lightbox-btn').forEach(button => {
        button.addEventListener('click', function() {
            const imageSrc = this.getAttribute('data-image');
            lightboxImage.src = imageSrc;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeLightbox.addEventListener('click', function() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const openMenuButton = document.querySelector('.md\\:hidden'); // The hamburger button
    const closeMenuButton = document.getElementById('close-mobile-menu');

    openMenuButton.addEventListener('click', function () {
        mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    });

    closeMenuButton.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });
    document.querySelectorAll('#mobile-menu nav a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
    });
});