// Melissa Mangos
// Personal Website

var pages = {};
var colour;

window.onload = function() {
	colour = document.getElementById("colour");

	pages["about"] = document.getElementById("about");
	pages["experience"] = document.getElementById("experience");
	pages["projects"] = document.getElementById("projects");
	pages["contact"] = document.getElementById("contact");

	document.body.removeChild(pages["experience"]);
	document.body.removeChild(pages["projects"]);
	document.body.removeChild(pages["contact"]);
};

function swapPage(element) {
	var page = getCurrentPage();
	console.log(page);

	switch (element) {
		case "red":
			if (page != "about") {
				colour.setAttribute("id", "tored");
				document.body.removeChild(pages[page]);
				document.body.appendChild(pages["about"]);
				colour.style.height = "0px";
				document.body.style.backgroundColor = "#E8573F";
			}
			break;
		case "green":
			if (page != "experience") {
				colour.setAttribute("id", "togreen");
				document.body.removeChild(pages[page]);
				document.body.appendChild(pages["experience"]);
				document.body.style.backgroundColor = "#37BC9B";
				colour.style.height = "1px";
				colour.style.top = "1px";
			}
			break;
		case "yellow":
			if (page != "projects") {
				colour.setAttribute("id", "toyellow");
				document.body.removeChild(pages[page]);
				document.body.appendChild(pages["projects"]);
				document.body.style.backgroundColor = "#F6BB42";
				colour.style.height = "0px";
			}
			break;
		case "purple":
			if (page != "contact") {
				colour.setAttribute("id", "topurple");
				document.body.removeChild(pages[page]);
				document.body.appendChild(pages["contact"]);
				document.body.style.backgroundColor = "#967ADC";
				colour.style.height = "0px";
			}
			break;
	}
};

function getCurrentPage() {
	var elem = document.body.lastElementChild.id;
	return elem;
};