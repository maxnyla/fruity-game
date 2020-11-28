

var cards = [
  {"name" : "blackgrape", "image": "assets/img/blackgr.jpg"},
  {"name" : "blueberry", "image": "assets/img/blueb.jpg"},
  {"name" : "grapefruit", "image": "assets/img/grapefr.jpg"},
  {"name" : "raspberry", "image": "assets/img/raspb.jpg"},
  {"name" : "redgrape", "image": "assets/img/redgr.jpg"},
  {"name" : "strawberry", "image": "assets/img/strawb.jpg"},
  {"name" : "blackgrape", "image": "assets/img/blackgr.jpg"},
  {"name" : "blueberry", "image": "assets/img/blueb.jpg"},
  {"name" : "grapefruit", "image": "assets/img/grapefr.jpg"},
  {"name" : "raspberry", "image": "assets/img/raspb.jpg"},
  {"name" : "redgrape", "image": "assets/img/redgr.jpg"},
  {"name" : "strawberry", "image": "assets/img/strawb.jpg"}
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
                              <img style="width:300px" class="img-fluid" src="assets/img/juicy4.png" onclick=flip(${i})>
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
      document.getElementById(userClicks[0]).innerHTML = `<img style="width:300px" class="img-fluid" src="${cards[userClicks[0]].image}">`;
      document.getElementById(userClicks[1]).innerHTML = `<img style="width:300px" class="img-fluid" src="${cards[userClicks[1]].image}">`;
      
      
      userClicks.length = 0;
    }
  }
  
  if (userClicks.length === 2) userClicks.length = 0;
  
}