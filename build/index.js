// src/elements.ts
var nextPlayerElement = document.querySelector("#nextPlayer");
var playerElement = document.querySelector("#player");
var buttons = document.querySelectorAll(".btn");
var restartBtn = document.querySelector("#restart");
var gameSteps = document.querySelector("#game-steps");

// src/index.ts
var gamePlayer = {
  current: "x",
  winner: null
};
buttons.forEach((btn, idx) => {
  btn.addEventListener("click", (e) => {
    const button = e.target;
    if (button.textContent === "") {
      button.textContent = gamePlayer.current;
      gamePlayer.current = gamePlayer.current === "x" ? "o" : "x";
      nextPlayerElement.textContent = gamePlayer.current;
      checkWinner();
    }
    const stepWrapper = document.createElement("div");
    stepWrapper.className = "flex gap-3 text-white";
    const stepsElms = document.createElement("p");
    stepsElms.className = " font-[24px]";
    stepsElms.textContent = `step-${idx}:`;
    const textBtn = document.createElement("p");
    textBtn.className = " font-[24px]";
    textBtn.textContent = button.textContent;
    stepWrapper.append(stepsElms, textBtn);
    stepWrapper.addEventListener("click", (e2) => {
      const clickedStep = e2.target;
      if (clickedStep) {
        clickedStep.classList.add("text-red-600");
        clickedStep.classList.remove("text-white");
      }
      if (btn) {
        btn.textContent = `${textBtn.textContent}`;
      }
      buttons.forEach((btn2) => {
        if (btn2 !== button) {
          btn2.textContent = "";
        }
      });
    });
    gameSteps.append(stepWrapper);
  });
});
restartBtn.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.textContent = "";
    gameSteps.textContent = "";
    button.disabled = false;
  });
  gamePlayer.winner = null;
  playerElement.textContent = "";
});
