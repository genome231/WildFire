//Random number function where you have to input min and max
sendMessage("This is system functions",0);
function randomInteger(min , max) {
	return Math.floor(Math.random() * (max - min)) + min; 
}

//Chance returns a number between 1 and 100.
function chance() {
  return Math.floor(Math.Random() * 100 + 1);
}

//Start stroking function where you set the pace, notice the number range goes from 4 - 24 equaling a metronome between 40-240.
function startStroking() {
	sendMessage("%StartStroking%");
	playStrokePace(4);
}

function stopStroking() {
	sendMessage("%StopStroking%");
	playAudio("GNMSounds/Stroking/NoSound.mp3");
}

//A function that will randomly increase the pace by a min and max amount given. There is also a chance that the domme, will tell you that the pace is increased.
// Case 1: Both increments are above 28, in which case the pace 28 will be chosen.
// Case 2: None of them are above 28 in which case the function simply runs as intended.
// Case 3:


function increasePaceRandom(incrementMin,incrementMax) {
  if (chance() > 30) {
    sendMessage("%StrokeFaster%");
    incrementMin = incrementMin + strokePace;
    incrementMax = incrementMax + strokePace;
    if (incrementMin > 28) {
      incrementMin = 28;
    } else {}
    if (incrementMax > 28) {
      incrementMax = 28;
    } else {}
    playStrokePace(randomInteger(incrementMin,incrementMax));
  } else {
    incrementMin = incrementMin + strokePace;
    incrementMax = incrementMax + strokePace;
    if (incrementMin > 28) {
      incrementMin = 28;
    } else {}
    if (incrementMax > 28) {
      incrementMax = 28;
    } else {}
    playStrokePace(randomInteger(incrementMin,incrementMax));
  }
}  

//Will reset the pace to value between 4 and 8.
function resetPace() {
  if (chance() > 30) {
    sendMessage("%StrokeSlow%");
    playStrokePace(randomInteger(4,8));
  } else {
    playStrokePace(randomInteger(4,8));
  }
}


//Chooses a completely random stroking pace between 4 and 28
function SetPace() {
  
}

//A function that will randomly increase the pace by 1 to 3 IF the pace isn't higher than 26
function increasePace() {
  if (chance() > 30 && strokePace < 26) {
    sendMessage("%StrokeFaster%");
    playStrokePace(randomInteger(1,3) + strokePace);
  } else if (strokePace < 26) {
    playStrokePace(randomInteger(1,3) + strokePace);    
  } else {}
}

//A function that will randomly reduce the pace by 1 to 3 IF the pace isn't lower than 6
function ReducePace() {
  if (chance() > 30 && strokePace > 6) {
    sendMessage("%StrokeSlower%");
    playStrokePace(strokePace - randomInteger(1,3));
  } else if (strokePace > 6) {
    playStrokePace(strokePace - randomInteger(1,3));    
  } else {}
}

function playStrokePace(strokePace) {
  if (strokePace < 4) {
    sendMessage("BUG: A stroking pace lower than 4 was attempted, setting pace to 4.");
    strokePace = 4;
    playAudio("GNMSounds/Stroking/Metronome/40.mp3");
  } else if (strokePace == 4) {
    playAudio("GNMSounds/Stroking/Metronome/40.mp3");
  } else if (strokepace == 5) {
    playAudio("GNMSounds/Stroking/Metronome/50.mp3");
  } else if (strokepace == 6) {
    playAudio("GNMSounds/Stroking/Metronome/60.mp3");
  } else if (strokepace == 7) {
    playAudio("GNMSounds/Stroking/Metronome/70.mp3");
  } else if (strokepace == 8) {
    playAudio("GNMSounds/Stroking/Metronome/80.mp3");
  } else if (strokepace == 9) {
    playAudio("GNMSounds/Stroking/Metronome/90.mp3");
  } else if (strokepace == 10) {
    playAudio("GNMSounds/Stroking/Metronome/100.mp3");
  } else if (strokepace == 11) {
    playAudio("GNMSounds/Stroking/Metronome/110.mp3");
  } else if (strokepace == 12) {
    playAudio("GNMSounds/Stroking/Metronome/120.mp3");
  } else if (strokepace == 13) {
    playAudio("GNMSounds/Stroking/Metronome/130.mp3");
  } else if (strokepace == 14) {
    playAudio("GNMSounds/Stroking/Metronome/140.mp3");
  } else if (strokepace == 15) {
    playAudio("GNMSounds/Stroking/Metronome/150.mp3");
  } else if (strokepace == 16) {
    playAudio("GNMSounds/Stroking/Metronome/160.mp3");
  } else if (strokepace == 17) {
    playAudio("GNMSounds/Stroking/Metronome/170.mp3");
  } else if (strokepace == 18) {
    playAudio("GNMSounds/Stroking/Metronome/180.mp3");
  } else if (strokepace == 19) {
    playAudio("GNMSounds/Stroking/Metronome/190.mp3");
  } else if (strokepace == 20) {
    playAudio("GNMSounds/Stroking/Metronome/200.mp3");
  } else if (strokepace == 21) {
    playAudio("GNMSounds/Stroking/Metronome/210.mp3");
  } else if (strokepace == 22) {
    playAudio("GNMSounds/Stroking/Metronome/220.mp3");
  } else if (strokepace == 23) {
    playAudio("GNMSounds/Stroking/Metronome/230.mp3");
  } else if (strokepace == 24) {
    playAudio("GNMSounds/Stroking/Metronome/240.mp3");
  } else if (strokepace == 25) {
    playAudio("GNMSounds/Stroking/Metronome/250.mp3");
  } else if (strokepace == 26) {
    playAudio("GNMSounds/Stroking/Metronome/260.mp3");
  } else if (strokepace == 27) {
    playAudio("GNMSounds/Stroking/Metronome/270.mp3");
  } else if (strokepace == 28) {
    playAudio("GNMSounds/Stroking/Metronome/280.mp3");
  } else if (strokepace > 28) {
    sendMessage("BUG: A stroking pace higher than 28 was attempted, setting pace to 28.");
    strokePace = 28;
    playAudio("GNMSounds/Stroking/Metronome/280.mp3");
  } else {
    sendMessage("BUG: Failed to select a strokingpace, no Audio will play.")
  }
    
    
}

//I wanna be able to input a number between min and max and have these numbers inclusive.
//If I input 1 - 1000, it will be (1000 - 1) * 0 + min
