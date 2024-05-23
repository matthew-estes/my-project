const key = document.querySelectorAll(".key");
const mysteryLetters = document.querySelectorAll(".letter");
const mysteryWord = "SABOTEUR";
const messageEl = document.querySelector(".message");

let correctLetters = 0;
let badAttempts = 0;

/*----------------------------- Functions -----------------------------*/

function init() {
  badAttempts = 0;
  correctLetters = 0;
}

function checkForWin() {
  if (correctLetters == mysteryWord.length) {
    messageEl.innerText = "Congrats, you won!";
  } else if (badAttempts == 3) {
    messageEl.innerText = "Sorry, you lost! The word was" + mysteryWord;
  }
}

/*----------------------------- Event Listeners -----------------------------*/

key.forEach((key) => {
  key.addEventListener("click", (event) => {
    const clickedKey = event.target.innerText;
    let successful = false;

    for (let i = 0; i < mysteryWord.length; i++) {
      if (
        mysteryWord[i] === clickedKey &&
        !mysteryLetters[i].classList.contains("guess")
      ) {
        mysteryLetters[i].innerText = clickedKey;
        mysteryLetters[i].classList.add("guess");
        correctLetters++;
        successful = true;
        console.log("correct attempts:", correctLetters);
      }
    }

    if (!successful) {
      badAttempts++;
      console.log("bad attempts:", badAttempts);
    }
  });
});
