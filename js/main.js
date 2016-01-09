// Melissa Mangos
// Personal Website

var pages = {};
var colour;
var colourCodes = {};
var descriptions = {
	"clock":"Clock that parses Unix time into a hexidecimal colour code.",
	"alarm":"Functional prototype of an alarm clock with design focused on intuitive user experience.",
	"robogals":"Website for non-profit organization, created during annual Code Jam.",
};


window.onload = function() {
	colour = document.getElementById("colour");
	colourCodes["about"] = "#E8573F";
	colourCodes["experience"] = "#48CFAD";
	colourCodes["projects"] = "#F6BB42";
	colourCodes["contact"] = "#967ADC";

	pages["about"] = document.getElementById("about");
	pages["experience"] = document.getElementById("experience");
	pages["projects"] = document.getElementById("projects");
	pages["contact"] = document.getElementById("contact");

	document.body.removeChild(pages["experience"]);
	document.body.removeChild(pages["projects"]);
	document.body.removeChild(pages["contact"]);
};


function swapPage(element) {
	var list;
	var i = 2;
	var page = getCurrentPage();
	document.body.style.backgroundColor = colourCodes[page];

	switch (element) {
		case "red":
			if (page != "about") {
				colour.setAttribute("id", "tored");
				document.body.removeChild(pages[page]);
				document.body.appendChild(pages["about"]);
				document.body.style.animation = "background-red 0.001s 1s 1 forwards";
				document.body.style.webkitAnimation = "background-red 0.001s 1s 1 forwards";
			}
			break;
		case "green":
			if (page != "experience") {
				colour.setAttribute("id", "togreen");
				document.body.removeChild(pages[page]);
				document.body.appendChild(pages["experience"]);
				document.body.style.animation = "background-green 0.001s 1s 1 forwards";
				document.body.style.webkitAnimation = "background-green 0.001s 1s 1 forwards";
			}
			break;
		case "yellow":
			if (page != "projects") {
				colour.setAttribute("id", "toyellow");
				document.body.removeChild(pages[page]);
				document.body.appendChild(pages["projects"]);
				document.body.style.animation = "background-yellow 0.001s 1s 1 forwards";
				document.body.style.webkitAnimation = "background-yellow 0.001s 1s 1 forwards";
			}
			break;
		case "purple":
			if (page != "contact") {
				colour.setAttribute("id", "topurple");
				document.body.removeChild(pages[page]);
				document.body.appendChild(pages["contact"]);
				document.body.style.animation = "background-purple 0.001s 1s 1 forwards";
				document.body.style.webkitAnimation = "background-purple 0.001s 1s 1 forwards";
			}
			break;
	}
};

function getCurrentPage() {
	var elem = document.body.lastElementChild.id;
	return elem;
};

function showDescription(element) {;
	var para = document.createElement("P");
	var p = document.createTextNode(descriptions[element.id]);
	para.appendChild(p);
	element.appendChild(para);
};

function removeDescription(element) {
	element.removeChild(element.lastElementChild);
}