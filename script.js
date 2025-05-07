// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animation on scroll
window.addEventListener('scroll', revealElements);

function revealElements() {
    const elements = document.querySelectorAll('.timeline-item, .project-card, .cert-item, .skill-item');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    revealElements();
});

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('fade-out');
        
        // Enable scrolling after preloader is gone
        setTimeout(() => {
            document.body.style.overflow = 'visible';
            // Initialize AOS after preloader
            if (typeof AOS !== 'undefined') {
                AOS.init({
                    duration: 1000,
                    once: true,
                    mirror: false,
                    offset: 100
                });
            }
            
            // Initialize other animations
            initAnimations();
        }, 500);
    }, 2000);
    
    // Disable scrolling during preloader
    document.body.style.overflow = 'hidden';
    
    // Initialize all components
    initNavigation();
    initCustomCursor();
    initParticles();
    initTypingEffect();
    initSwipers();
    initProjectModals();
    initContactForm();
});

// Navigation
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');
    const header = document.querySelector('header');

    // Toggle navigation menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a nav link
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Sticky Header
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Custom Cursor
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        });
        
        // Cursor effects on hover
        const links = document.querySelectorAll('a, button, .btn, .hamburger');
        
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                cursor.style.width = '0px';
                cursor.style.height = '0px';
                cursorFollower.style.width = '50px';
                cursorFollower.style.height = '50px';
                cursorFollower.style.borderColor = 'var(--primary-color)';
                cursorFollower.style.backgroundColor = 'rgba(0, 255, 0, 0.1)';
            });
            
            link.addEventListener('mouseleave', () => {
                cursor.style.width = '10px';
                cursor.style.height = '10px';
                cursorFollower.style.width = '30px';
                cursorFollower.style.height = '30px';
                cursorFollower.style.borderColor = 'var(--primary-color)';
                cursorFollower.style.backgroundColor = 'transparent';
            });
        });
    } else {
        // Hide custom cursor on mobile
        cursor.style.display = 'none';
        cursorFollower.style.display = 'none';
    }
}

// Particles.js
function initParticles() {
    if (document.getElementById('particles-js')) {
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: '#00ff00'
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color: '#000000'
                        },
                        polygon: {
                            nb_sides: 5
                        }
                    },
                    opacity: {
                        value: 0.5,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#00ff00',
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'grab'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: true
            });
        }
    }
}

// Typing Effect
function initTypingEffect() {
    if (document.querySelector('.typing-text')) {
        if (typeof Typed !== 'undefined') {
            const options = {
                strings: ['Amir Hazmi', 'a Developer', 'a Cybersecurity Enthusiast'],
                typeSpeed: 100,
                backSpeed: 60,
                backDelay: 2000,
                loop: true
            };
            
            new Typed('.typing-text', options);
        }
    }
}

// Initialize Swipers
function initSwipers() {
    // Project Swipers
    const projectSwipers = document.querySelectorAll('.project-swiper');
    
    projectSwipers.forEach(swiperElement => {
        // Check if Swiper is defined before using it
        if (typeof Swiper !== 'undefined') {
            new Swiper(swiperElement, {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: swiperElement.querySelector('.swiper-pagination'),
                    clickable: true,
                },
                navigation: {
                    nextEl: swiperElement.querySelector('.swiper-button-next'),
                    prevEl: swiperElement.querySelector('.swiper-button-prev'),
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
            });
        } else {
            console.error('Swiper is not defined. Make sure it is included in your project.');
        }
    });
    
    // Modal Swiper
    if (typeof Swiper !== 'undefined') {
        const modalSwiper = new Swiper('.modal-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.modal-swiper .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.modal-swiper .swiper-button-next',
                prevEl: '.modal-swiper .swiper-button-prev',
            },
        });
    } else {
        console.error('Swiper is not defined. Make sure it is included in your project.');
    }
}

// Project Modals
function initProjectModals() {
    const modal = document.querySelector('.project-modal');
    const modalTitle = document.querySelector('.modal-title');
    const modalSwiper = document.querySelector('.modal-swiper .swiper-wrapper');
    const closeBtn = document.querySelector('.close-modal');
    const viewButtons = document.querySelectorAll('.view-project');
    
    // Project data
    const projects = {
        project1: {
            title: 'Secure Cloud Storage with Malware Analyzer and AES Encryption',
            images: [
                'https://via.placeholder.com/1200x800/1a1a1a/00ff00?text=Cloud+Storage+Dashboard',
                'https://via.placeholder.com/1200x800/1a1a1a/00ff00?text=Encryption+Interface',
                'https://via.placeholder.com/1200x800/1a1a1a/00ff00?text=Malware+Scan+Results',
                'https://via.placeholder.com/1200x800/1a1a1a/00ff00?text=File+Management',
                'https://via.placeholder.com/1200x800/1a1a1a/00ff00?text=QR+Authentication'
            ]
        },
        project2: {
            title: 'VerifyBuy: Intelligent Fraud Detection and Seller Verification',
            images: [
                'https://via.placeholder.com/1200x800/1a1a1a/00ff00?text=VerifyBuy+Interface',
                'https://via.placeholder.com/1200x800/1a1a1a/00ff00?text=Chatbot+Conversation',
                'https://via.placeholder.com/1200x800/1a1a1a/00ff00?text=Fraud+Detection+Results',
                'https://via.placeholder.com/1200x800/1a1a1a/00ff00?text=Seller+Verification',
                'https://via.placeholder.com/1200x800/1a1a1a/00ff00?text=Analytics+Dashboard'
            ]
        },
        project3: {
            title: 'Clinic Appointment Management System',
            images: [
                'https://via.placeholder.com/1200x800/1a1a1a/00ff00?text=Clinic+Dashboard',
                'https://via.placeholder.com/1200x800/1a1a1a/00ff00?text=Appointment+Booking',
                'https://via.placeholder.com/1200x800/1a1a1a/00ff00?text=Mobile+App+Interface',
                'https://via.placeholder.com/1200x800/1a1a1a/00ff00?text=Doctor+Schedule',
                'https://via.placeholder.com/1200x800/1a1a1a/00ff00?text=Patient+Records'
            ]
        }
    };
    
    // Open modal
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.getAttribute('data-project');
            const project = projects[projectId];
            
            if (project) {
                modalTitle.textContent = project.title;
                
                // Clear previous slides
                modalSwiper.innerHTML = '';
                
                // Add new slides
                project.images.forEach(image => {
                    const slide = document.createElement('div');
                    slide.className = 'swiper-slide';
                    slide.innerHTML = `<img src="${image}" alt="Project Screenshot">`;
                    modalSwiper.appendChild(slide);
                });
                
                // Initialize new swiper
                initSwipers();
                
                // Show modal with animation
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'visible';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'visible';
        }
    });
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple form validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
}

// Additional animations
function initAnimations() {
    // Animate skill bars
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(skill => {
        const width = skill.style.width;
        skill.style.width = '0';
        setTimeout(() => {
            skill.style.width = width;
        }, 500);
    });
    
    // Scroll animations for elements
    window.addEventListener('scroll', revealElementsOnScroll);
    revealElementsOnScroll(); // Initial check
}

// Reveal elements on scroll
function revealElementsOnScroll() {
    const elements = document.querySelectorAll('.timeline-item, .project-card, .cert-item, .skill-item, .leadership-list li, .awards-list li');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Add project screenshot upload functionality
function setupProjectImageUpload() {
    // This function would be implemented to allow users to upload their own project screenshots
    // For demonstration purposes, we're just showing the placeholder functionality
    
    const uploadButtons = document.querySelectorAll('.upload-screenshot');
    if (uploadButtons.length > 0) {
        uploadButtons.forEach(button => {
            button.addEventListener('click', () => {
                alert('In a real implementation, this would open a file dialog to upload your project screenshots.');
            });
        });
    }
}