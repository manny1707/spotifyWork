window.onload = function() {
	var tModal1 = document.getElementById("tModal1");
	var tModal2 = document.getElementById("tModal2");
	var tModal3 = document.getElementById("tModal3");
	var btn1 = document.getElementById("tBtn1");
	var btn2 = document.getElementById("tBtn2");
	var btn3 = document.getElementById("tBtn3");
	var span1 = document.getElementsByClassName("close1")[0];
	var span2 = document.getElementsByClassName("close1")[1];
	var span3 = document.getElementsByClassName("close1")[2];

	btn1.onclick = function() {
		tModal1.style.display = "block";
	}

	btn2.onclick = function() {
		tModal2.style.display = "block";
	}

	btn3.onclick = function() {
		tModal3.style.display = "block";
	}

	span1.onclick = function() {
		tModal1.style.display = "none";
	}

	span2.onclick = function() {
		tModal2.style.display = "none";
	}

	span3.onclick = function() {
		tModal3.style.display = "none";
	}

	window.onclick = function(event) {
		if (event.target == tModal1) {
			tModal1.style.display = "none";
		}
		else if (event.target == tModal2) {
			tModal2.style.display = "none";
		}
		else if (event.target == tModal3) {
			tModal3.style.display = "none";
		}
	}
}