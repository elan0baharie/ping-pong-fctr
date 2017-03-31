//B.L.
var factrDetct = function (testNum) {
  for (var index= 1; index <= testNum; index++) {
    if ((index % 3 === 0) && (index % 5 === 0)) {
      paster("ping-pong");
    } else if (index % 3 === 0) {
      paster("ping");
    } else if (index % 5 === 0) {
      paster("pong");
    } else {
      paster(index);
    }
  };
};//function to test number range

var paster = function(test) {
  var newLi = document.createElement("li");
  var responseRng = document.createTextNode(test);
  newLi.appendChild(responseRng);

  var liPlacement = document.getElementById("rngList");
  liPlacement.appendChild(newLi);
};// function to add new list items to correct section


var factNum = function(numb) {
  if (isNaN(numb) === true) {
    alert("Please Enter A Number");
    document.getElementById("userNumber").reset();
  } else {
    listDeleter();
    factrDetct(numb);
    document.getElementById("userNumber").reset();
  }
};// gate keeper function

var listDeleter = function(listItems) {
  var listItems = document.getElementById('rngList');
  while (listItems.hasChildNodes()) {
    listItems.removeChild(listItems.firstChild);
  };
};// function to empty last range of numbers


//U.I.
$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    var htmlInput = parseInt($("input#numInput").val());
    var final = factNum(htmlInput);

    $("ul > li").text(final);
  });


});// Doc Rdy
