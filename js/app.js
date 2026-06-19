const glow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// Intersection Observer for section animations
const hiddenSections = document.querySelectorAll(".hidden-section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-section");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

hiddenSections.forEach((section) => {
  observer.observe(section);
});

// Smooth scrolling for nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Animate progress bars when they come into view
const progressBars = document.querySelectorAll(".progress-bar");

const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll(".progress-bar");

        bars.forEach((bar) => {
          bar.style.width = bar.dataset.width;
        });
      }
    });
  },
  {
    threshold: 0.3,
  },
);

const skillsSection = document.querySelector("#skills");

skillsObserver.observe(skillsSection);

// Premium loader animation
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("loader-hide");
  }, 1200);
});

// Custom cursor
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// // Mouse glow effect
// const glow = document.getElementById("mouse-glow");

// document.addEventListener("mousemove", (e) => {
//   glow.style.left = e.clientX - 150 + "px";
//   glow.style.top = e.clientY - 150 + "px";
// });
