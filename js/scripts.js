//B.L.
var factrDetct = function (testNum) {
  for (var index= 1; index <= testNum; index++) {
    if (index % 3 === 0) {
      paster("ping");
    } else if (index % 5 === 0) {
      paster("pong");
    }
    else {
      paster(index);
    }
  };

};

var paster = function(test) {
  var newLi = document.createElement("li");
  var responseRng = document.createTextNode(test);
  newLi.appendChild(responseRng);

  var liPlacement = document.getElementById("rngList");
  liPlacement.appendChild(newLi);
};


var factNum = function(numb) {
  if (isNaN(numb) === true) {
    alert("Please Enter A Number");
    document.getElementById("userNumber").reset();
  } else {
    factrDetct(numb);
    document.getElementById("userNumber").reset();
  }
};

//U.I.
$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    var htmlInput = parseInt($("input#numInput").val());
    var final = factNum(htmlInput);

    $("ul > li").text(final);
  });


});// Doc Rdy
