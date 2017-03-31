//B.L.
// var factrDetct = function ();


var factNum = function(numb) {
  if (isNaN(numb) === true) {
    alert("Please Enter A Number");
    document.getElementById("userNumber").reset();
  } else {
    console.log("Gooooo jooobb!");
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
