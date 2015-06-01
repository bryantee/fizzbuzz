$(document).ready(function() {
	// testing for jquery functionality
	// ability to append to div
	$('div').append("<p>Hi! Checkout FizzBuzz</p>");
	console.log('jQuery Loaded!');

	// start the for loop
	for (var i = 1; i < 101; i++) {
		// console.log(i);
		// $('div').append("<p>" + i + "</p>");

		// OK, for real this time
		if (i % 5 === 0 && i % 3 === 0) {
			$('div').append("<p> FizzBuzz </p>");
			}
		else if (i % 5 === 0) {
			$('div').append("<p> buzz </p>");
			}
		else if (i % 3 === 0) {
			$('div').append("<p> fizz </p>");
			}
		else {
			$('div').append("<p>" + i + "</p>");
		}

	};


});