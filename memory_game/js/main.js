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

var cardOne = cards[0];
cardsInPlay.push('queen');
console.log('User flipped queen');
var cardTwo = cards[2];
cardsInPlay.push('king');
console.log('User flipped king');
if (cardsInPlay.length === 2) {
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
}
else{
	alert("Sorry, try again.");
}
}


