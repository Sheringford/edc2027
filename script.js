document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".page-section");
    const navLinks = document.querySelectorAll(".nav-links a");

    // Listen for scrolling on the window, not the container
    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Use window.scrollY instead of scrollContainer.scrollTop
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            // Highlight the link if its href matches the current section's id
            if (current && link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});
