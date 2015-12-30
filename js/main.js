// Melissa Mangos
// Personal Website

var pages = {};
var colour;
var colourCodes = {};

window.onload = function() {
	colour = document.getElementById("colour");
	colourCodes["about"] = "#E8573F";
	colourCodes["experience"] = "#37BC9B";
	colourCodes["projects"] = "#F6BB42";
	colourCodes["contact"] = "#967ADC";

	pages["about"] = document.getElementById("about");
	pages["experience"] = document.getElementById("experience");
	pages["projects"] = document.getElementById("projects");
	pages["contact"] = document.getElementById("contact");

	pages["about"].style.animation = "fade-in 1s 0.2s 1 forwards";

	document.body.removeChild(pages["experience"]);
	document.body.removeChild(pages["projects"]);
	document.body.removeChild(pages["contact"]);
};

function swapPage(element) {
	var page = getCurrentPage();
	document.body.style.backgroundColor = colourCodes[page];

	switch (element) {
		case "red":
			if (page != "about") {
				colour.setAttribute("id", "tored");
				document.body.removeChild(pages[page]);
				document.body.appendChild(pages["about"]);
				pages["about"].style.visibility = "hidden";
				document.body.style.animation = "background-red 0.001s 1s 1 forwards";
				pages["about"].style.animation = "fade-in 1s 1s 1 forwards";
			}
			break;
		case "green":
			if (page != "experience") {
				colour.setAttribute("id", "togreen");
				document.body.removeChild(pages[page]);
				document.body.appendChild(pages["experience"]);
				pages["experience"].style.visibility = "hidden";
				document.body.style.animation = "background-green 0.001s 1s 1 forwards";
				pages["experience"].style.animation = "fade-in 0.5s 2s 1 forwards";
			}
			break;
		case "yellow":
			if (page != "projects") {
				colour.setAttribute("id", "toyellow");
				document.body.removeChild(pages[page]);
				document.body.appendChild(pages["projects"]);
				pages["projects"].style.visibility = "hidden";
				document.body.style.animation = "background-yellow 0.001s 1s 1 forwards";
				pages["projects"].style.animation = "fade-in 1s 2s 1 forwards";

			}
			break;
		case "purple":
			if (page != "contact") {
				colour.setAttribute("id", "topurple");
				document.body.removeChild(pages[page]);
				document.body.appendChild(pages["contact"]);
				pages["contact"].style.visibility = "hidden";
				document.body.style.animation = "background-purple 0.001s 1s 1 forwards";
				pages["contact"].style.animation = "fade-in 1s 2s 1 forwards";
			}
			break;
	}
};

function getCurrentPage() {
	var elem = document.body.lastElementChild.id;
	return elem;
};