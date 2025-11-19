// ===============================
// Burger Menu
// ===============================
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  menu.classList.add("open");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("open");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("open");
  overlay.classList.remove("active");
});

// ===============================
// Theme Toggle
// ===============================
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");
if (savedTheme) root.setAttribute("data-theme", savedTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// ===============================
// Typing Effect
// ===============================
const typingElement = document.querySelector(".typing");
const roles = ["Jr developer", "linux user", "tech enthusiast", "professional idiot"];
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const current = roles[roleIndex];
  if (!deleting) {
    typingElement.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      deleting = true;
      setTimeout(type, 2250); // how long each word stays
      return;
    }
  } else {
    typingElement.textContent = current.substring(0, charIndex--);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(type, deleting ? 60 : 120);
}

type();

// ===============================
// Show More Socials
// ===============================
const showMoreBtn = document.getElementById("show-more-btn");
const socialGrid = document.querySelector(".social-grid");

if (showMoreBtn && socialGrid) {
  showMoreBtn.addEventListener("click", () => {
    socialGrid.classList.toggle("expanded");

    if (socialGrid.classList.contains("expanded")) {
      showMoreBtn.textContent = "Show Less";
    } else {
      showMoreBtn.textContent = "Show More";
      window.scrollTo({
        top: socialGrid.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
}
