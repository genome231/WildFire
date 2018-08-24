//Random number function where you have to input min and max
sendMessage("This is system functions",0);
function randomInteger(min , max) {
	return Math.floor(Math.random() * (max - min)) + min; 
}

//Chance returns a number between 1 and 100.
function chance() {
  return randomInteger(1,100);
}


