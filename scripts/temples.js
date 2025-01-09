document.querySelector("#hamburger").addEventListener("click", () => {
    // Toggle visibility in nav bar
    document.querySelector(".navigation").classList.toggle("visible");
    // Togle close class in hamburger
    document.querySelector("#hamburger").classList.toggle("close");
});