let countDownDate = new Date("Jan 23,2024 00:00:00").getTime();
let x = setInterval(function () {
	let now = new Date().getTime();
	let distance = countDownDate - now;
	let noOfDays = Math.floor(distance / (1000 * 60 * 60 * 24));
	let noOfHours = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	let noOfMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let noOfSeconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.getElementById("Days").innerHTML = noOfDays;
	document.getElementById("Hours").innerHTML = noOfHours;
	document.getElementById("Minutes").innerHTML = noOfMinutes;
	document.getElementById("Seconds").innerHTML = noOfSeconds;
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("Days").innerHTML = "00";
		document.getElementById("Hours").innerHTML = "00";
		document.getElementById("Minutes").innerHTML = "00";
		document.getElementById("Seconds").innerHTML = "00";
	}
}, 1000);
