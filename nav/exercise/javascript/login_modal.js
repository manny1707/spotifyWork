window.onload = function(){
    // begin login button popup js	
	// Get the modal
	
	var modal = document.getElementById('id01');
	var modal2 = document.getElementById('id02');
	
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		} else if (event.target == modal2) {
			modal.style.display = "none";
		}
	}
    // end login button popup js
}