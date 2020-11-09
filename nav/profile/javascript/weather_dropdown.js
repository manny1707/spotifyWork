(function weatherDropDown() {
	document.getElementById("weather-drop-btn").onclick = function() {showWeatherWindow()};
	function showWeatherWindow() {
		document.getElementById("weatherBtnCover").classList.toggle("show");
		document.getElementById("weatherDrop").classList.toggle("show");
		populateWeatherInformation();
	// add animations here
	}

	document.getElementById("weatherBtnCover").onclick = function() {hideWeatherWindow()};
	function hideWeatherWindow() {
		document.getElementById("weatherBtnCover").classList.toggle("show");
		document.getElementById("weatherDrop").classList.toggle("show");

	}
}) ();