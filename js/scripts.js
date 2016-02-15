var currentNum;
var upper;

var pingPong = function(currentNum) {
  if ((currentNum % 3 === 0) && (currentNum % 5 != 0)) {
    return "ping";
  } else if ((currentNum % 5 === 0) && (currentNum % 3 != 0)) {
    return "pong";
  } else if ((currentNum % 5 === 0) && (currentNum % 3 === 0)) {
    return "ping pong";
  } else {
    return currentNum;
  }
}



$(document).ready(function() {
  $("form#entry").submit(function(event) {
    upper = $("input#userEntry").val();

    event.preventDefault();
  });
});
