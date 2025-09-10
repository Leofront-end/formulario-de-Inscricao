document.addEventListener("DOMContentLoaded", () => {
    tsParticles.load("particles-js", {
        particles: {
            number: { value: 200 },
            size: { value: 3 },
            move: { enable: true, speed: 2 },
            line_linked: { enable: true, color: "#00bfff" },
            color: { value: "#00bfff" }
        },
        interactivity: {
            events: {
                onHover: {enable: true, mode: "repulse"},
                onClick: {enable: true, mode: "push"}
            },
            modes: {
                repulse: {distance: 50},
                push: {quantity: 4}
            },
        },
        
        detectRetina: true
    })}
)
