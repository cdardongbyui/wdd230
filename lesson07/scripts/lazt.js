document.addEventListener("DOMContentLoaded", function () {
    const footerDate = document.getElementById("lastModifiedDate");
    const lastModified = new Date(document.lastModified);
    footerDate.textContent = lastModified.toDateString();
});

// Intersection Observer for lazy loading and animation
const lazyImages = document.querySelectorAll("img");

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.loading = "lazy";
            observer.unobserve(img);
        }
    });
}, options);

lazyImages.forEach((img) => {
    img.dataset.src = img.src;
    img.src = "";
    observer.observe(img);
});
