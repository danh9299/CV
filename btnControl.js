lamp = document.getElementById("lamp");
btnOn = document.getElementById("btnOn");
btnOff = document.getElementById("btnOff");



// Switch the lamp on
btnOn.addEventListener("click", switchOn);
function switchOn(){
    lamp.src="img/lampOn-01.png";
}


// Switch the lamp off
btnOff.addEventListener("click", switchOff);
function switchOff(){
    lamp.src="img/lampOff-01.png";
}


