let installation;

if (installation) {
  sendMessage("DEBUG: running Installation");
  run("installation.js");
  installation = false;
} else {
}

sendMessage("DEBUG: running system functions");
run("systemFunctions.js");

sendMessage("DEBUG: Running Structure");
run("Structure/WildFireStructure.js");