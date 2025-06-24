document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-menu");
  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});
const links = document.querySelectorAll("nav-menu a");
links.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});
const navLinks = document.querySelectorAll("nav a");
      const currentPage = location.pathname.split("/").pop();

      navLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("active");
        }
      });

