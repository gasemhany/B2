document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".buy-btn");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Thank you for your purchase!");
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible"); // لإعادة التأثير عند التمرير للخارج
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => observer.observe(element));
});
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("header .nav-links a");

    // إضافة تأثير النقر الناعم
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 60, // لضبط الإزاحة بسبب الهيدر الثابت
                behavior: "smooth"
            });
        });
    });
});
