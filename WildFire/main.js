let installation;

if (installation) {
  sendMessage("DEBUG: running Installation");
  run("installation.js");
  installation = false;
} else {
}

sendMessage("DEBUG: running system functions");
run("Functions/functions_Basic.js");
sendMessage("DEBUG: running stroking functions");
run("Functions/functions_Stroking.js");

sendMessage("DEBUG: Running Start");
run("Session/Start/start_Base.js");