let sum = 0;
let cards = [];
let hasBlackJak = false;
let isAlive = false;
let message = "";

let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");


function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  hasBlackJak = false
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  sumEl.textContent = sum;
  cardEl.textContent = `Cards: `;
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  
  if (sum <= 20) {
    message = "Do you Want to drow a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got BlackJack!";
    player.chips += 5
    hasBlackJak = true;
  } else {
    message = "You're out of the game!";
    player.chips += -5
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJak === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
