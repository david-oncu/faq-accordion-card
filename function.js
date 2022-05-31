// expand section on click 

const faqs = document.querySelectorAll(".faq-question-single");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});