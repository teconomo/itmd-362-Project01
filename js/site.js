$(document).ready(function () {
	$("#fitnessform").on('submit', function (e) {
		e.preventDefault();
	})
})

function myGreeting() {
	document.getElementById("submission").innerHTML = "Congratulations! Welcome to the Team";
}