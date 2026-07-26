document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
      SCROLL ANİMASYONU
    =========================================*/

    const animatedItems = document.querySelectorAll(
        ".service-card, .contact-card, .review-card, .office-gallery img, .about-box, .google-score"
    );

    if (animatedItems.length) {

        const observer = new IntersectionObserver((entries, obs) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    obs.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.15
        });

        animatedItems.forEach(item => {

            item.style.opacity = "0";
            item.style.transform = "translateY(30px)";
            item.style.transition = "opacity .6s ease, transform .6s ease";

            observer.observe(item);

        });

    }

    /*=========================================
      YUKARI ÇIK BUTONU
    =========================================*/

    const topButton = document.createElement("button");

    topButton.id = "topButton";
    topButton.innerHTML = "↑";
    topButton.setAttribute("aria-label", "Yukarı Çık");

    document.body.appendChild(topButton);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topButton.classList.add("show");

        } else {

            topButton.classList.remove("show");

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

    /*=========================================
      AKTİF MENÜ
    =========================================*/

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".main-nav a");

    function updateActiveMenu() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", updateActiveMenu);

    updateActiveMenu();

});
