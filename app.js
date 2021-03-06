/*    MEMORY    */

//  Barrett Amsrud
//  October - November, 2016

//  Create one array of sets of two numbers.
var cardArray = ['&#x16A0', '&#x16A2', '&#x16A6', '&#x16A8', '&#x16B1', '&#x16B2',
                '&#x16B7', '&#x16B9', '&#x16BB', '&#x16BE', '&#x16C1', '&#x16C3',
                '&#x16C7', '&#x16C8', '&#x16C9', '&#x16CA', '&#x16CF', '&#x16D2',
                '&#x16D6', '&#x16D7', '&#x16DA', '&#x16DD', '&#x16DF', '&#x16DE'];
var state = false;
var totalTurns = 0;
var pairsRemaining = cardArray.length;
var firstClicked = 'none';
var secondClicked = 'none';
var unmatched = false;

$(document).ready(function () {

  //  Duplicate all items in the array, creating a new array
  duplicateArray(cardArray);

  //  Shuffle cards
  shuffleArray(cardArray);

  //  Append cards to DOM
  placeCards(cardArray);

  //  Hide all cards at the start of the game
  hideCards($('.card'));

  //  Set initial remaining pairs
  setRemainingMatches();

  //  Click handler
  $('#board').on('click', '.card', function() {
    //  If the previous two cards are unmatched, hide them.
    if (unmatched) {
      firstClicked.addClass('hidden');
      secondClicked.addClass('hidden');
      console.log('Hiding unmatched');
      unmatched = false;
    }
    //  Detects if a card is hidden.  Prevents click events on revealed cards.
    if ($(this).hasClass('hidden')) {
      $(this).removeClass('hidden');
      state = !state;
      if (state) {
        firstClicked = $(this);
        console.log('First');
      } else if (!state) {
        secondClicked = $(this);
        compareCards(firstClicked, secondClicked);
        console.log('Second');
      } else {
        console.log('ERROR');
      }
    }
  });

});

//  Function to duplicate all items in array
function duplicateArray(array) {
  var arrLength = array.length;
  for (var i = 0; i < arrLength; i++) {
    array.push(array[i]);
  }
}

//  Function to shuffle array.  Found on Stack Overflow.
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

//  Function to append divs to the DOM
function placeCards(array) {
  var cardsPerRow = array.length / 6; //8
  //  Create six rows
  for (var rows = 0; rows < 6; rows++) {
    var $row = $('<div class="card-row"></div>');
    //  Add cards to rows
    for (var cardItem = 0; cardItem < cardsPerRow; cardItem++) {
      //  Add cards
      var cardInfo = array.shift();
      $row.append('<div class="card"><p>' + cardInfo + '</p></div>');
    }
    //  Append cards and reset variable
    $('#board').append($row);
    $row = null;
  }
}

//  Function to hide revealed cards
function hideCards($card) {
  $card.addClass('hidden');
}

//  Function to set turns taken on DOM
function setTurnsTaken() {
  $('#turns-taken').text(totalTurns);
}

//  Function to set remaining matches on DOM
function setRemainingMatches() {
  $('#pairs-remaining').text(pairsRemaining);
}

//  Function to compare cards
function compareCards(first, second) {
  totalTurns ++;
  setTurnsTaken();
  if (first.children().text() == second.children().text()) {
    pairsRemaining --;
    setRemainingMatches();
    console.log('Match!');
  } else {
    unmatched = true;
  }
}
