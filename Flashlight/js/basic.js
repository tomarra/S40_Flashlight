function init() {
	var classToUse = "";
	if (screen.width > 240) {
		classToUse = " landscape";
	}
	else {
		classToUse = " portrait";
	}
	
	document.getElementById("main").setAttribute("class", document.getElementById("main").getAttribute("class") + classToUse);
}
