// Init Lucide icons after script loads
window.addEventListener("load", () => {
  if (window.lucide) window.lucide.createIcons();
});

// Mobile burger
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
if (burger) {
  burger.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );
}

// Scroll reveal
const reveal = (els) => {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((el) => io.observe(el));
};

document.querySelectorAll(
  ".section, .hero__card, .hero__text, .card, .project, .timeline__item, .badge, .stat"
).forEach((el) => el.classList.add("reveal"));

reveal(document.querySelectorAll(".reveal"));
