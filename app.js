document.addEventListener("DOMContentLoaded", () => {
  const cardArr = [
    {
      name: "black",
      img: "images/black.png",
    },
    {
      name: "blue",
      img: "images/blue.png",
    },
    {
      name: "dc",
      img: "images/dc.png",
    },
    {
      name: "green",
      img: "images/green.png",
    },
    {
      name: "indigo",
      img: "images/indigo.png",
    },
    {
      name: "orange",
      img: "images/orange.png",
    },
    {
      name: "red",
      img: "images/red.png",
    },
    {
      name: "saphire",
      img: "images/saphire.png",
    },
    {
      name: "white",
      img: "images/white.png",
    },
    {
      name: "yellow",
      img: "images/yellow.png",
    },
  ];

    const grid = document.querySelector(".grid");
    const cardsChosen = []
    const cardsChosen = []

  function createBoard() {
    for (let i = 0; i < cardArr.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      // card.addEventListener('click', flipcard)
      grid.appendChild(card);
    }
  }

    function flipcard() {
        const cardId = this.getAttribute('data-id', i)
        cardsChosen.push(cardArr[cardId].name)
    }
    
    
  createBoard();
});
