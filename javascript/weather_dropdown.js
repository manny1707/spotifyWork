

(function weatherDropDown() {
	let navWeatherBtn = document.getElementById("navbarWeatherBtn");
	let navWeatherCover = document.getElementById("weatherBtnCover");
	let weatherDrop = document.getElementById("weatherDrop");

	navWeatherBtn.onclick = function() { showWeatherWindow() };
	navWeatherCover.onclick = function() { hideWeatherWindow() };
	// remove this if we add an interactable element on weather dropdown
	// weatherDrop.onclick = function() { hideWeatherWindow() };

	function showWeatherWindow() {
		navWeatherCover.classList.toggle("show");
		weatherDrop.classList.toggle("show");
		populateWeatherInformation();
	// add animations here
	}
	
	function hideWeatherWindow() {
		navWeatherCover.classList.toggle("show");
		weatherDrop.classList.toggle("show");
	}
}) ();