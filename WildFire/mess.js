
let installation = false;
//Declare all used variables
var strokeTime;
var merits;

//! == not which results in if not installation (works for booleans) also you only had one = there before. It must be installation == false otherwise
//Keep in mind installation is not stored throughout multiple sessions. Which means if you want to store it you will have to use something like setVar("installation", true) and getVar("installation")
if (!installation) {
	strokeTime = 200;
	merits = randomInteger(400,600);
	installation = true;
	break;
}
else {
//Break does not work like this. I don't know what you want to do but you can only use break inside loops and return inside functions.
	break;
}


if (!installation) {
	run("installation.js");
	break;
}
else {
	run("Structure/WildFireStructure.js");
	break;
}






	strokeTime = 200;
	registerVariable("strokeTime","Stroke Time","Explanation");
	merits = randomInteger(400,600);
	//This the reason for your merits not working as you want them to work. You will have to store them as a TAJ variable to keep them throughout the sessions
	//Everytime you change the merits you will have to use this:
	setVar("merits", merits); //merits in this case because you assigned the random integer to them but in other cases the new value you want your merits to have
	//You can then access the current merits like this:
	merits = getVar("merits");
	registerVariable("merits","Merits","Merits determine how popular you are with the Domme.");
	installation = true;






				









// strokeTime is how long a session can last in seconds.
// merits is how popular the domme is with the sub at any given time.
