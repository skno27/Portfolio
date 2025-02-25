document.addEventListener("DOMContentLoaded", () => {
  const animateCards = (container) => {
    const cards = container.querySelectorAll(".card.hidden");
    cards.forEach((card, i) => {
      setTimeout(() => {
        void card.offsetWidth;
        card.classList.add("slide-in");
        card.classList.remove("hidden");
      }, i * 300);
    });
  };

  const tabLinks = document.querySelectorAll("[data-bs-toggle='tab']");
  tabLinks.forEach((link) => {
    link.addEventListener("shown.bs.tab", (e) => {
      const targetSelector = e.target.getAttribute("href");
      const targetPane = document.querySelector(targetSelector);
      animateCards(targetPane);
    });
  });
  window.addEventListener("load", () => {
    const activePane = document.querySelector(".tab-pane.active");
    if (activePane) {
      setTimeout(() => {
        animateCards(activePane);
      }, 200);
    }
  });
});
