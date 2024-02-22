

var css = document.querySelector("h3");
var clr1 = document.querySelector(".clr1");
var clr2 = document.querySelector(".clr2");
var body = document.getElementById("gradient");
var button = document.getElementById("random-color-button");

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, "
			+clr1.value
			+", "
			+clr2.value
			+")";

			css.textContent = body.style.background + ";"; 
}

function getRandomColor() {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function setRandomGradient() {
	body.style.background = "linear-gradient(to right, " + getRandomColor() + ", " + getRandomColor() + ")";
	css.textContent = body.style.background + ";";
}

clr1.addEventListener("input", setGradient);

clr2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomGradient);
