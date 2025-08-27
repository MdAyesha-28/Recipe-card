const toggleIngredientsBtn = document.getElementById("toggle-ingredients");
const ingredientsList = document.getElementById("ingredients");

toggleIngredientsBtn.addEventListener("click", () => {
  ingredientsList.classList.toggle("hidden");
  toggleIngredientsBtn.textContent = ingredientsList.classList.contains("hidden")
    ? "Show Ingredients"
    : "Hide Ingredients";
});

const toggleStepsBtn = document.getElementById("toggle-steps");
const stepsList = document.getElementById("steps");

toggleStepsBtn.addEventListener("click", () => {
  stepsList.classList.toggle("hidden");
  toggleStepsBtn.textContent = stepsList.classList.contains("hidden")
    ? "Show Steps"
    : "Hide Steps";
});

const startBtn = document.getElementById("start-cooking");
const nextBtn = document.getElementById("next-step");
const steps = document.querySelectorAll("#steps li");
const progressBar = document.querySelector(".progress");
const timerEl = document.getElementById("timer");

let currentStep = 0;
let timer = 0;
let interval;

startBtn.addEventListener("click", () => {
  if (stepsList.classList.contains("hidden")) {
    stepsList.classList.remove("hidden");
  }

  steps.forEach(step => step.classList.remove("highlight"));
  currentStep = 0;
  steps[currentStep].classList.add("highlight");

  startBtn.classList.add("hidden");
  nextBtn.classList.remove("hidden");
  timerEl.classList.remove("hidden");

  // Start timer
  timer = 0;
  interval = setInterval(() => {
    timer++;
    timerEl.textContent = `Time: ${timer}s`;
  }, 1000);
});

nextBtn.addEventListener("click", () => {
  steps[currentStep].classList.remove("highlight");
  currentStep++;

  if (currentStep < steps.length) {
    steps[currentStep].classList.add("highlight");
    progressBar.style.width = `${((currentStep + 1) / steps.length) * 100}%`;
  } else {
    nextBtn.classList.add("hidden");
    clearInterval(interval);
    progressBar.style.width = `100%`;
    alert("Recipe complete!");
  }
});
