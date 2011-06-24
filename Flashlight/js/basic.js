/**
 * Flashlight
 * @author Tom Arra
 */

/**
 * Load the correct stylesheet for the screen size
 */
if (screen.width > 240) {
  document.write('<link rel="stylesheet" href="css/landscape.css" type="text/css" />');
}
else {
	document.write('<link rel="stylesheet" href="css/portrait.css" type="text/css" />');
}

/**
 * Run on web app load
 */
function init() {

}
