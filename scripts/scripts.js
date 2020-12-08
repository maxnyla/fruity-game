const cards = document.querySelectorAll('.fruit-card');

let cardFlipped = false;
let blockClick = false;
let firstCard, secondCard;
//let matchFound = 0;
var emptyBox = [];


// shuffle all the cards on page load. (Logic and method from freecodecamp tutorial)

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });

})();


// flip the cards when clicked on

function flipCard() {
    if (blockClick) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!cardFlipped) {
        // the first clicked card
        cardFlipped = true;
        firstCard = this;
    } else {
        //the second clicked card
        cardFlipped = false;
        secondCard = this;

        //run the function to check
        doCardsMatch();
    }
}


// check if the two clicked cards match

function doCardsMatch() {
    //is the first card the same as the second card? 
    if (firstCard.dataset.pic === secondCard.dataset.pic) {

        //if they are the  same, create temp empty array to place and count matched cards in
        emptyBox.push(firstCard.dataset.pic);
        emptyBox.push(secondCard.dataset.pic);

        //show the real-time addition of matched cards in console
        console.log(emptyBox);

        //when the total of matches adds up to 12
        if (emptyBox.length === 12) {
            // inject the 'you won' message and remove the game board from sight
            gameWon();
        }

        //if the cards match, remove them both from the game pool:
        removeCards();

        //if they don't match unflip them so they go back into the pool:
    } else if (firstCard.dataset.pic !== secondCard.dataset.pic) {
        unflipCards();
    }
}



// function for when two clicked cards match (they are then removed fron the pool of clickable cards)

function removeCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetGame();
}


// function for when cards don't match (they are put back into the game, ie unflipped) after the set timeout. Logic from freecodecamp tutorial.

function unflipCards() {
    blockClick = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        blockClick = false;
        resetGame();
    }, 1000);
}


function gameWon() {
    //when all the cards have matched, display congratulations message (which was hidden until now) and hide game board (logic from w3schools tutorial)
    $("#fruity").hide(700);
    $("#congrats").show();
}


// function for the game board to be reset

function resetGame() {
    cardFlipped = false;
    blockClick = false;
    firstCard = null;
    secondCard = null;
}


//function for button to refresh the screen/ reload the game (logic from freecodecamp) 

function reloadGame() {
    window.location.reload();
}


//adding click event listener for all card elements to flip

cards.forEach(card => card.addEventListener('click', flipCard));

