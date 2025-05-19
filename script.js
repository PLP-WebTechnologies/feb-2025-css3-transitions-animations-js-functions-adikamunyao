const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");
const saveColorBtn = document.getElementById("saveColorBtn");

// Function to trigger animation
animateBtn.addEventListener("click", () => {
  // Add the animation class
  box.classList.add("animate");

  // Remove the animation class after animation ends so it can be triggered again
  box.addEventListener("animationend", () => {
    box.classList.remove("animate");
  }, { once: true });
});

// Function to save color preference in localStorage
saveColorBtn.addEventListener("click", () => {
  const color = prompt("Enter your favorite box color (e.g., blue, green, #f06):");
  if (color) {
    // Save the color to localStorage
    localStorage.setItem("boxColor", color);
    box.style.backgroundColor = color;
  }
});

// On page load, apply saved color from localStorage
window.addEventListener("DOMContentLoaded", () => {
  const savedColor = localStorage.getItem("boxColor");
  if (savedColor) {
    box.style.backgroundColor = savedColor;
  }
});
