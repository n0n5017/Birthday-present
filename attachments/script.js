const wishes = [
  "Stay close to God.",
  "Take your education seriously.",
  "Never let anyone make you feel small.",
  "Choose your friends carefully.",
  "Learn how to manage money.",
  "Don't be afraid to fail.",
  "Respect people.",
  "Learn to apologize when you're wrong.",
  "Protect each other.",
  "Don't rush into adulthood.",
  "Have fun while you're young.",
  "Take care of your health.",
  "Keep learning outside school.",
  "Don't compare your journey to someone else's.",
  "Remember your family.",
  "Build a life you'll be proud of.",
];

const wishesGrid = document.getElementById("wishesGrid");

wishes.forEach((wish, index) => {
  const card = document.createElement("button");
  card.className = "wish";
  card.type = "button";
  card.innerHTML = `
    <div class="wish-number">${String(index + 1).padStart(2, "0")}</div>
    <div class="wish-text">${wish}</div>
  `;
  card.addEventListener("click", () => {
    card.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(.96)" },
        { transform: "scale(1.03)" },
        { transform: "scale(1)" },
      ],
      { duration: 350, easing: "ease-out" },
    );
  });
  wishesGrid.appendChild(card);
});

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

revealItems.forEach((item) => observer.observe(item));

function celebrate(count = 110) {
  const container = document.getElementById("confetti");
  const pieces = [
    "#ff5db1",
    "#8d6cff",
    "#4ec8ff",
    "#ffd166",
    "#69e6ad",
    "#ffffff",
  ];

  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = pieces[Math.floor(Math.random() * pieces.length)];
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    piece.style.animationDuration = `${2.4 + Math.random() * 2.8}s`;
    piece.style.animationDelay = `${Math.random() * 0.7}s`;
    piece.style.width = `${6 + Math.random() * 7}px`;
    piece.style.height = `${10 + Math.random() * 10}px`;
    container.appendChild(piece);

    setTimeout(() => piece.remove(), 6000);
  }
}

document.getElementById("openSurprise").addEventListener("click", () => {
  celebrate();
  document.getElementById("surprise").scrollIntoView({ behavior: "smooth" });
});

document
  .querySelector('[data-action="stubborn"]')
  .addEventListener("click", () => {
    document.getElementById("stubbornResult").textContent =
      "ERROR 404: Stubbornness limit not found. Please try again in 16 years. 😂";
  });

document
  .querySelector('[data-action="excite"]')
  .addEventListener("click", () => {
    document.getElementById("exciteResult").textContent =
      "Loading enthusiasm... Loading... Request timed out. 😭";
  });

document.querySelectorAll(".chaos-card").forEach((card) => {
  card.addEventListener("click", () => {
    card.animate(
      [
        { transform: "translateY(0) rotate(0)" },
        { transform: "translateY(-7px) rotate(-1deg)" },
        { transform: "translateY(0) rotate(0)" },
      ],
      { duration: 360, easing: "ease-out" },
    );
  });
});

const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secretMessage");

secretBtn.addEventListener("click", () => {
  secretMessage.classList.add("show");
  secretBtn.textContent = "😂 YOU WERE TOLD NOT TO CLICK IT";
  celebrate(70);
  secretMessage.scrollIntoView({ behavior: "smooth", block: "center" });
});

document.getElementById("celebrateBtn").addEventListener("click", () => {
  celebrate(180);
});

window.addEventListener("load", () => {
  setTimeout(() => celebrate(80), 900);
});
