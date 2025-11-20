// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme") || "light";
root.setAttribute("data-theme", savedTheme);

themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const newTheme = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// Typing Effect
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
      setTimeout(type, 2250);
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

if (typingElement) type();

// Bottom Nav Active State
const navLinks = document.querySelectorAll(".bottom-nav a[href^='#']");
const sections = document.querySelectorAll("section[id]");

function updateActive() {
  let current = "";
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}

window.addEventListener("scroll", updateActive);
window.addEventListener("load", updateActive);