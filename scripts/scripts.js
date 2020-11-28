
let blackgrape = ""
blackgrape = "../img/blackgr.jpg"


var cards = [
  {
    "name" : "blackgrape"
  },
  {
    "name" : "blueberry"
  },
  {
    "name" : "grapefruit"
  },
  {
    "name" : "raspberry"
  },
  {
    "name" : "redgrape"
  },
  {
    "name" : "strawberry"
  },
  {
    "name" : "blackgrape"
  },
  {
    "name" : "blueberry"
  },
  {
    "name" : "grapefruit"
  },
  {
    "name" : "raspberry"
  },
  {
    "name" : "redgrape"
  },
  {
    "name" : "strawberry"
  }
]


var userClicks = [];


window.addEventListener("load", function(){
  
  
  cards.sort(function(a, b){return 0.5 - Math.random();});

  
  load_back_cards(cards);
  
  
  load_list_cards(cards);
  
});



function load_back_cards(cards) {
  let numberOfCards = cards.length;
  
  let element = document.getElementById("back_cards");
  
  for (let i = 0; i < numberOfCards; i++){
    element.innerHTML += `<li id="${i}" class="cards">
                              <img style="width:100px" src="../assets/img/juicy4.png" onclick=flip(${i})>
                          </li>`
  }
}



function load_list_cards(cards) {
  let numberOfCards = cards.length;
  
  let element = document.getElementById("list-cards");
  
  for (let i = 0; i < numberOfCards; i++){
    element.innerHTML += `<ol>
                              ${i + 1} - ${cards[i].name}
                          </ol>`
  }
}



function flip(index){
  
  userClicks.push(index);

  console.log(userClicks);
  
  alert(cards[index].name);
  
  if (userClicks.length === 2) {
    if (cards[userClicks[0]].name === cards[userClicks[1]].name) {
      document.getElementById(userClicks[0]).innerHTML = `<img style="width:100px" src="../img/juicy4.png">`;
      document.getElementById(userClicks[1]).innerHTML = `<img style="width:100px" src="../img/juicy4.png">`;
      
      
      userClicks.length = 0;
    }
  }
  
  if (userClicks.length === 2) userClicks.length = 0;
  
}