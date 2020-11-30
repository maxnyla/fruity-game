const cards = document.querySelectorAll('.fruit-card');

let hasFlippedCard = false;
let firstCard, secondCard;


//function flipCard(){
  // this.classList.toggle('flip');
//}


function flipCard(){
  this.classList.add('flip');
  
  if (!hasFlippedCard) {
    // first clicked card
    hasFlippedCard = true;
    firstCard = this;
  } else {
    //second clicked card
    hasFlippedCard = false;
    secondCard = this;

    //do the two cards match?
    if (firstCard.dataset.frame ===
    secondCard.dataset.frame) {

      //you matched them
      firstCard.removeEventListener('click, flipCard');
      secondCard.removeEventListener('click, flipCard');
    } else {
      //cards don't match
      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
      }, 1000);
    }

}
}



cards.forEach(card => card.addEventListener('click', flipCard));