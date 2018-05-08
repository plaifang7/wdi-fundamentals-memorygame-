// console.log("Up and running!");
// var cardOne = "queen";
// var cardTwo = "king";
// var cardThree = "queen";
// var cardFour = "king";
// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardFour);
var cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: 'images/queen-of-hearts.png',
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: 'images/queen-of-diamonds.png',
},
{
rank: 'king',
suit: 'hearts',
cardImage: 'images/king-of-hearts.png',
},
{
rank: 'king',
suit:'diamonds',
cardImage: 'images/king-of-diamonds.png',
}
];
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


var flipcard = function (){
	cardId = this.getAttribute('data-id');


	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src', cards[cardId].cardImage);	
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

var createBoard = function(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipcard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();

//second attempt at creating code for reset button
	var resetBtn = document.querySelector('#reset');
	document.querySelector('button').addEventListener('click', function(e){
	e.preventDefault();
	document.getElementById('game-board').value = "";
	createBoard();
	}, false);
;



// tried to make a button function
// var newGame = function(){
// 	for (var i = 0; i < cards.length; i++) {
// 		var resetGame = document.resetGame('img');
// resetGame.addEventListener('click', alert('New Game'));
// resetGame.setAttribute('src', 'images/back.png');
// resetGame.setAttribute('data-id', i);
// document.getElementById('game-board').appendChild(resetGame);
// // }
// }

// newGame();



