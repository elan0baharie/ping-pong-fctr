//B.L.

var factNum = function(numb) {
return false;
};

//U.I.
$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    var htmlInput = $("input#numInput").val();
    var final = factNum(htmlInput);

    $("ul > li").text(final);
  });


});// Doc Rdy
