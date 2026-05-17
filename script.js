document.addEventListener('DOMContentLoaded', () => {
    // Inject tsParticles for interactive background
    const tsScript = document.createElement("script");
    tsScript.src = "https://cdn.jsdelivr.net/npm/@tsparticles/bundle@3.0.3/tsparticles.bundle.min.js";
    tsScript.onload = () => {
        const particlesDiv = document.createElement("div");
        particlesDiv.id = "tsparticles";
        Object.assign(particlesDiv.style, {
            position: "fixed", top: "0", left: "0", width: "100%", height: "100%", zIndex: "0"
        });
        document.body.prepend(particlesDiv);

        tsParticles.load({
            id: "tsparticles",
            options: {
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "grab" },
                        onClick: { enable: true, mode: "push" }
                    },
                    modes: {
                        grab: { distance: 150, links: { opacity: 0.5, color: "#d4af37" } },
                        push: { quantity: 4 }
                    }
                },
                particles: {
                    color: { value: ["#d4af37", "#6a0dad", "#ffffff"] },
                    links: { enable: true, color: "#ffffff", distance: 150, opacity: 0.1, width: 1 },
                    move: { enable: true, speed: 1.5, direction: "none", outModes: "bounce" },
                    number: { value: 60, density: { enable: true, area: 800 } },
                    size: { value: { min: 1, max: 3 } }
                },
                detectRetina: true
            }
        });
    };
    document.head.appendChild(tsScript);

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle Icon
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Typing Effect
    const typingText = document.querySelector('.typing-text');
    const words = ["AI Solutions","Machine Learning Models","Intelligent Systems", "AI-Powered Apps", "Deep Learning Projects","Web Development"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 1500; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Pause before new word
        }

        setTimeout(type, typeSpeed);
    }

    // Start typing effect
    setTimeout(type, 1000);

    // Fade In Animation on Load
    const revealElements = document.querySelectorAll('.section-padding, .glass, .project-card');
    
    revealElements.forEach((el, index) => {
        if (!el.classList.contains('reveal')) {
            el.classList.add('reveal');
        }
        setTimeout(() => {
            el.classList.add('active');
        }, 100 * index); // Stagger the fade-in
    });
});

