// console.log("Up and running!");
// var cardOne = "queen";
// var cardTwo = "king";
// var cardThree = "queen";
// var cardFour = "king";
// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardFour);
var cards = ["queen", "queen","king","king"];
cards.length;
var cardsInPlay = [];
cardsInPlay.length;

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
}
else{
	alert("Sorry, try again.");
}
}


var flipcard = function (cardId){
console.log("User flipped" + cards[cardId]);
cardsInPlay.push(cards[cardId]);	
if (cardsInPlay.length === 2) {
	
checkForMatch();
}
};
flipcard(0);
flipcard(2);


