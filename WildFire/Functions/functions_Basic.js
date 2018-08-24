//Random number function where you have to input min and max
sendMessage("This is system functions",0);
function randomInteger(min , max) {
	return Math.floor(Math.random() * (max - min)) + min; 
}

//Chance returns a number between 1 and 100.
function chance() {
  return randomInteger(1,100);
}

function selectStart() {
  selection = randomInteger(1,5);
  if (selection === 1) {
    run("Session/Start/Session_Starts/s1.js");
  } else if (selection === 2) {
    run("Session/Start/Session_Starts/s2.js");
  } else if (selection === 3) {
    run("Session/Start/Session_Starts/s3.js");
  } else if (selection === 4) {
    run("Session/Start/Session_Starts/s4.js");
  } else if (selection === 5) {
    run("Session/Start/Session_Starts/s5.js");
  } else {
    sendMessage("BUG: Failed to launch a start module. Trying again..",5);
    selectStart();
  }
}
