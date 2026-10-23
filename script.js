document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".page-section");
    const navLinks = document.querySelectorAll(".nav-links a");
    const scrollContainer = document.querySelector(".scroll-container");

    // Funktion um den aktiven Link basierend auf der Scroll-Position hervorzuheben
    scrollContainer.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Überprüfen, welcher Bereich gerade im Fokus ist
            if (scrollContainer.scrollTop >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});
