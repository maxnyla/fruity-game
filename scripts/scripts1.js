const cards = document.querySelectorAll('.fruit-card');

let cardFlipped = false;
let blockClick = false;
let firstCard, secondCard;
let matchFound = 0;
var emptyBox = [];

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


// check if the cards match

//function doCardsMatch(){
    //is the first card the same as the second card? 

//   if (firstCard.dataset.pic ===
//       secondCard.dataset.pic) {
      //if they match:
//       removeCards();

     //if they don't match:
//     } else {
//      unflipCards();
//  }            
//}

function doCardsMatch(){
    //is the first card the same as the second card? 

   if (firstCard.dataset.pic === secondCard.dataset.pic) {

        emptyBox.push(firstCard.dataset.pic);
        emptyBox.push(secondCard.dataset.pic);

        console.log(emptyBox);

        if(emptyBox.length === 12){
            gameWon(); // remove container with cards and inject you won message
        }

      //if they match:
       removeCards();

     //if they don't match:
    } else if (firstCard.dataset.pic !== secondCard.dataset.pic) {
       unflipCards();
    
    //show alert if user matches all cards
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

         
function gameWon(){
    // matchFound++;
    // cardFlipped = null;
    // if (matchFound === 6) {
    //         alert('CONGRATULATIONS! YOU WON');
    //     }   
    // How do I remove that image container in the DOM and inject the message
    alert("CONGRATULATIONS! YOU WON");
}



// function for the game board to be reset

function resetGame(){
  [cardFlipped, blockClick] = [false, false];
  [firstCard, secondCard] = [null, null];
}


//button to refresh the screen/ reload the game 

function reloadGame(){
    window.location.reload();
} 

                    
cards.forEach(card => card.addEventListener('click', flipCard));


