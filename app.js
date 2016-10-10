/*    MEMORY    */
//  Barrett Amsrud
//  October, 2016


//Create one array of sets of two numbers.
var cardArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12];
var clickCount = 0;
var totalTurns = 0;

$(document).ready(function() {

//Shuffle cards
shuffleArray(cardArray);
//Append cards to DOM
placeCards(cardArray);

//click handler

});

//function to shuffle array.  Found on Stack Overflow.
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

//function to append divs to the DOM
function placeCards(array) {
  var i = 0;
  var $row;
  while (i < array.length) {
    for (var j = 0; j < 6; j++) {
      $row = $('<div class="row"></div>');
      $row.append('<div class="click-card" id="card-' + i + '"></>');
      i++;
    }
    $('#board').append($row);
  }
  for (var k = 0; k < array.length; k++) {
    $('#card-' + k).data('cardType', array[k]);
  }
}

//function to hide revealed cards
