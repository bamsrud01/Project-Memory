/*    MEMORY    */

//  Barrett Amsrud
//  October, 2016

//  Create one array of sets of two numbers.
var cardArray = ['&#x16A0', '&#x16A2', '&#x16A6', '&#x16A8', '&#x16B1', '&#x16B2',
                '&#x16B7', '&#x16B9', '&#x16BB', '&#x16BE', '&#x16C1', '&#x16C3',
                '&#x16C7', '&#x16C8', '&#x16C9', '&#x16CA', '&#x16CF', '&#x16D2',
                '&#x16D6', '&#x16D7', '&#x16DA', '&#x16DD', '&#x16DF', '&#x16DE'];
var clickCount = 0;
var totalTurns = 0;

$(document).ready(function () {

  //  Duplicate all items in the array
  duplicateArray(cardArray);

  //  Shuffle cards
  shuffleArray(cardArray);

  //  Append cards to DOM
  placeCards(cardArray);

  //  Hide all cards
  hideCards($('.card'));

  //  Click handler
  $('#board').on('click', '.card', function() {
    //  If hidden

    //  If counter shows 2 cards
      //  Check for a match
      //  If match, add permanent class
      //  If not, reset the counter
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
