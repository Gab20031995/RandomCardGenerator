/* eslint-disable */
import "bootstrap";
import "./style.css";

function deckBuilder() {
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const suits = ["♦", "♥", "♠", "♣"];
  const cards = [];
  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      const value = values[v];
      const suit = suits[s];
      cards.push({ value, suit });
    }
  }
  return cards;
}
function randomCard(cards) {
  const random = Math.floor(Math.random() * 51);
  const cardValue = cards[random].value;
  const cardSuit = cards[random].suit;
  let postSuit;
  cardSuit === ""
    ? (postSuit = "")
    : (postSuit = "" + cardSuit.toLowerCase() + "");
  const card = document.createElement("div");
  card.classList.add("card", cardSuit.toLowerCase());
  card.innerHTML =
    '<span class="card-suit top">' +
    postSuit +
    "</span>" +
    '<span class="card-value">' +
    cardValue +
    "</span>" +
    '<span class="card-suit bottom">' +
    postSuit +
    "</span>";
  document.body.appendChild(card);
}

const cards = deckBuilder();
randomCard(cards);
function refreshPage() {
  window.location.reload();
}
