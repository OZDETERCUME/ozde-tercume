document.addEventListener("DOMContentLoaded", function () {

    // Animasyon
    const items = document.querySelectorAll(
        ".service-card, .contact-card, .review-card, .office-gallery img"
    );

    if (items.length > 0) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        }, {
            threshold: 0.15
        });

        items.forEach(function (item) {
            item.style.opacity = "0";
            item.style.transform = "translateY(30px)";
            item.style.transition = "all .6s ease";
            observer.observe(item);
        });
    }

    // Yukarı çık butonu
    const topButton = document.createElement("button");
    topButton.innerHTML = "↑";
    topButton.id = "topButton";

    document.body.appendChild(topButton);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
            topButton.classList.add("show");
        } else {
            topButton.classList.remove("show");
        }
    });

    topButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});
