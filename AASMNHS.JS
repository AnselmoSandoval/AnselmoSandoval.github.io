

// Smooth scrolling functionality
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a");

    for (const link of links) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const href = this.getAttribute("href");

            if (href.startsWith("#")) {
                const targetElement = document.querySelector(href);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            } else {
                window.location.href = href;
            }
        });
    }
});


  


