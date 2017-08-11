console.log("Up and running!");

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

//temporary shuffled version of the cards array to be used in the flipCard function for randomizing the cards.
var mixedCards = [];
mixedCards = cards;


var cardsInPlay = [];

var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(mixedCards[cardId].rank);

	console.log(mixedCards[cardId].cardImage);
	console.log(mixedCards[cardId].suit);

	this.setAttribute('src',mixedCards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}

}

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard();

//Bonus Stuff: 

//For the reset button:
var reset = function() {
	location.reload(true);
}

document.getElementById('reset').addEventListener('click',reset);

//Shuffling code from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
//Fisher-Yates Shuffle

//For shuffling the card images:
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

mixedCards = shuffle(mixedCards);
