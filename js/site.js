$(document).ready(function () {
  $("#fitnessform").on("submit", function (e) {
  	e.preventDefault();
	});
  // I am creating a message on submission here
  $("#fitnessform").on("submit", function (e) {
  	document.getElementById("submission").innerHTML = "Thank you! Welcome to the Team!";
    });
});