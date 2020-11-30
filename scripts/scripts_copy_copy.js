const cards = document.querySelectorAll('.fruit-card');

let cardFlipped = false;
let blockClick = false;
let firstCard, secondCard;



function flipCard(){
  if (blockClick) return;
  if (this === firstCard) return;

  this.classList.add('flip');
  
  if (!cardFlipped) {
    // first clicked card
    cardFlipped = true;
    firstCard = this;
  } else {
    //second clicked card
    cardFlipped = false;
    secondCard = this;
    
    doCardsMatch();

}
}

function doCardsMatch(){
    //do the two cards match? 
   if (firstCard.dataset.frame ===
       secondCard.dataset.frame) {
      //they match:
       removeCards();
     //they don't match:
     } else {
       unflipCards();
  }            
}




function removeCards(){
     firstCard.removeEventListener('click, flipCard');
     secondCard.removeEventListener('click, flipCard');

     resetGame();
}


function unflipCards(){
        blockClick = true;

        setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        blockClick = false;
        resetGame();
      }, 1000);
}
         

function resetGame(){
  [cardFlipped, blockClick] = [false, false];
  [firstCard, secondCard] = [null, null];
}


(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;  
  });
})();

                    
cards.forEach(card => card.addEventListener('click', flipCard));



                 
