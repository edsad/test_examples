"use strict;"


// Here is a solution that outputs to screen

var output = document.getElementById("output");
var button = document.getElementById("button");

button.addEventListener("click", function FizzBuzz(){
	for (var i = 1; i <= 100; i++) {
		var op = document.createElement('div');
		var f = i % 3 == 0;
		var b = i % 5 == 0;
		op.innerHTML = `<p>${(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i)}</p>`;
		output.append(op);
	}
});

// Here is a solution that outputs to console

function fizzbuzz(){
	for (var i = 1; i <= 100; i++) {
		if ( i % 3 == 0 && i % 5 == 0) {
			console.log("FizzBuzz");
		}
		else if (i % 3 == 0) {
			console.log("Fizz");
		}
		else if (i % 5 == 0) {
			console.log("Buzz");
		}
		else {
			console.log(i);
		}
	}
}

fizzbuzz();


function BellaWella(){
	for (var i = 1; i <= 100; i++) {
		if ( i % 3 == 0 && i % 5 == 0) {
			console.log("BellaWella");
		}
		else if (i % 3 == 0) {
			console.log("Bella");
		}
		else if (i % 5 == 0) {
			console.log("Wella");
		}
		else {
			console.log(i);
		}
	}
}

BellaWella();


