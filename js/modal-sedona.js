var openclose = document.querySelector(".button-reservation");
var popup = document.querySelector(".reservation-modal");

var form = popup.querySelector(".reservation-form");
var arrival = popup.querySelector("[name=date-arrival]");
var departure = popup.querySelector("[name=date-departure]");
var adults = popup.querySelector("[name=adults]");
var kids = popup.querySelector("[name=kids]");

openclose.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("modal-show");
	if (popup.classList.contains("modal-show")) {			
			arrival.focus();
	} else {	
		if (popup.classList.contains("modal-error")) {			
			popup.classList.remove("modal-error");
		}	
	}
});

form.addEventListener("submit", function (evt) {
	if (!arrival.value || !departure.value || !adults.value || !kids.value) {
		evt.preventDefault();
		if (popup.classList.contains("modal-error")) {			
			popup.classList.remove("modal-error");
			popup.offsetWidth = popup.offsetWidth;
		}	
		popup.classList.add("modal-error");
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {		
		if (popup.classList.contains("modal-show")) {
			evt.preventDefault();			
			popup.classList.remove("modal-show");
			if (popup.classList.contains("modal-error")) {			
				popup.classList.remove("modal-error");
			}	
		}
	}
});