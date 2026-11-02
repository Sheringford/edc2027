document.addEventListener("DOMContentLoaded", () => {
    // --- Variables ---
    const sections = document.querySelectorAll(".page-section");
    const navLinks = document.querySelectorAll(".nav-links a"); // The individual links
    const mobileMenu = document.getElementById("mobile-menu");  // The hamburger button
    const navLinksContainer = document.getElementById("nav-links"); // The ul container

    // --- 1. Hamburger Menu Toggle ---
    if (mobileMenu && navLinksContainer) {
        // Open/close the menu when the hamburger is clicked
        mobileMenu.addEventListener("click", () => {
            navLinksContainer.classList.toggle("active");
        });

        // Close the dropdown menu automatically when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navLinksContainer.classList.remove("active");
            });
        });
    }

    // --- 2. Scroll Spy (Highlight active section) ---
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
