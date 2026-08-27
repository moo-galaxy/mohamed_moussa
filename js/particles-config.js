// Particles.js configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: "#F97316" },
        shape: { type: "circle" },
        opacity: { value: 0.4, random: true },
        size: { value: 2.5, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#F97316",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 140, line_linked: { opacity: 0.6 } },
            push: { particles_nb: 3 }
        }
    },
    retina_detect: true
});