sendMessage("This is system functions",0);
function randomInteger(min , max) {
	return Math.floor(Math.random() * (max - min)) + min; 
}

function startStroking(strokePace) {
	sendMessage("%StartStroking%");
	playAudio("GNMSounds/Stroking/Metronome/Fourty.mp3");
}

//I wanna be able to input a number between min and max and have these numbers inclusive.
//If I input 1 - 1000, it will be (1000 - 1) * 0 + min
