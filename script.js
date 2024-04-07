document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    { name: "fries", img: "images/fries.png" },
    { name: "fries", img: "images/fries.png" },
    { name: "cheeseburger", img: "images/cheeseburger.png" },
    { name: "cheeseburger", img: "images/cheeseburger.png" },
    { name: "hotdog", img: "images/hotdog.png" },
    { name: "hotdog", img: "images/hotdog.png" },
    { name: "ice-cream", img: "images/ice-cream.png" },
    { name: "ice-cream", img: "images/ice-cream.png" },
    { name: "milkshake", img: "images/milkshake.png" },
    { name: "milkshake", img: "images/milkshake.png" },
    { name: "pizza", img: "images/pizza.png" },
    { name: "pizza", img: "images/pizza.png" },
  ];

  const grid = document.querySelector(".grid");
  let cardChosen = [];
  let cardChosenId =[]
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      grid.appendChild(card);
    }
  }

  //   check for matches

  // flip card
  function flipCard() {
    const cardId = this.getAttributre("data-id");
    cardChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId)
    this.setAttribute("src",cardArray[cardId].img)
    if(cardChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
  }
  createBoard();
});
