//! HOME BUTTONS
const homeAdd1Btn = document.getElementById("home-add1");
const homeAdd2Btn = document.getElementById("home-add2");
const homeAdd3Btn = document.getElementById("home-add3");

//! GUEST BUTTONS
const guestAdd1Btn = document.getElementById("guest-add1");
const guestAdd2Btn = document.getElementById("guest-add2");
const guestAdd3Btn = document.getElementById("guest-add3");

//! DISPLAY
const homeDisplay = document.getElementById("home-display");
const guestDisplay = document.getElementById("guest-display");

const homeEmoji = document.getElementById("home-emoji");
const guestEmoji = document.getElementById("guest-emoji");

console.log(homeEmoji);

const newGame = document.getElementById("new-game");

let count = 0;
let count1 = 0;

//! ADDING THE NUMBERS
homeAdd1Btn.addEventListener("click", () => {
  count++;
  homeDisplay.textContent = count;

  displayEmojis();
});

homeAdd2Btn.addEventListener("click", () => {
  count += 2;
  homeDisplay.textContent = count;

  displayEmojis();
});

homeAdd3Btn.addEventListener("click", () => {
  count += 3;
  homeDisplay.textContent = count;

  displayEmojis();
});

guestAdd1Btn.addEventListener("click", () => {
  count1++;
  guestDisplay.textContent = count1;

  displayEmojis();
});

guestAdd2Btn.addEventListener("click", () => {
  count1 += 2;
  guestDisplay.textContent = count1;

  displayEmojis();
});

guestAdd3Btn.addEventListener("click", () => {
  count1 += 3;
  guestDisplay.textContent = count1;

  displayEmojis();
});

//! RESET THE SCORES
newGame.addEventListener("click", () => {
  count = 0;
  count1 = 0;
  homeDisplay.textContent = count;
  guestDisplay.textContent = count;

  displayEmojis();
});

function displayEmojis() {
  if (homeDisplay.textContent > guestDisplay.textContent) {
    homeEmoji.textContent = "😁";
    guestEmoji.textContent = "😔";
  } else if (homeDisplay.textContent < guestDisplay.textContent) {
    homeEmoji.textContent = "😔";
    guestEmoji.textContent = "😁";
  } else if (homeDisplay.textContent == guestDisplay.textContent) {
    homeEmoji.textContent = "🙂";
    guestEmoji.textContent = "🙂";
  }
}
