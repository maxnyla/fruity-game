const cards = document.querySelectorAll('.fruit-card');

let cardFlipped = false;
let blockClick = false;
let firstCard, secondCard;

// shuffle cards on page load

(function shuffle() {

  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;  
  });

})();


// flip the cards on click

function flipCard(){
  if (blockClick) return;
  if (this === firstCard) return;

  this.classList.add('flip');
  
  if (!cardFlipped) {
    // the first clicked card
    cardFlipped = true;
    firstCard = this;
  } else {
    //second clicked card
    cardFlipped = false;
    secondCard = this;
    
    doCardsMatch();
}
}

// check if the cards are the same

function doCardsMatch(){
    //do the two cards match? 
   if (firstCard.dataset.pic ===
       secondCard.dataset.pic) {
      //if they match:
       removeCards();

     //if they don't match:
     } else {
       unflipCards();
  }            
}


// function for when cards match (they are removed fron the game)

function removeCards(){
     firstCard.removeEventListener('click, flipCard');
     secondCard.removeEventListener('click, flipCard');

     resetGame();
}


// function for when cards don't match (they are put back into the game: unflipped)

function unflipCards(){
        blockClick = true;

        setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        blockClick = false;
        resetGame();
      }, 1000);
}
         

// function for the game board to be reset

function resetGame(){
  [cardFlipped, blockClick] = [false, false];
  [firstCard, secondCard] = [null, null];
}


                    
cards.forEach(card => card.addEventListener('click', flipCard));



                 
