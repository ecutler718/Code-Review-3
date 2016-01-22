//business logic
var counting = function(countTo) {
  var countUp = [];
   for (var i = 1; i <= countTo; i += 1){
     if (i % 15 == 0) {
      countUp.push("pingpong");
   } else if (i % 5 == 0) {
     countUp.push("pong");
   } else if (i % 3 == 0) {
      countUp.push("ping");
   } else{
      countUp.push(i);
   }
 }
     return countUp;

}


$(document).ready(function() {
  $("form#questions").submit(function(event){

//CAPTURE USER INPUT
  var countTo = parseInt($("#countTo").val());
  var userAnswer = counting(countTo);

   $(".result").text(userAnswer);
 event.preventDefault();
  });
});
