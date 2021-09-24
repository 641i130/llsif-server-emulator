const express = require("express");
const app = express();
const port = 3000;
function request() {

}


app.get("/", function(req, res) {
    res.send("You just did a get request!\n");
    console.log("Get request.");
})

// /main.php/login/authkey
app.get("/main.php/login/authkey",function(req, res) {
	
})


// /main.php/login/authkey
app.get("/main.php/login/authkey",function(req, res) {

})


// /main.php/login/authkey
app.get("/main.php/login/authkey",function(req, res) {

})

app.post("*", function(req, res) {
    console.log(req);
})


////////////////////////////////////////////////////////////////////////////////////
Reset = "\x1b[0m";
Bright = "\x1b[1m";
Dim = "\x1b[2m";
Underscore = "\x1b[4m";
Blink = "\x1b[5m";
Reverse = "\x1b[7m";
Hidden = "\x1b[8m";

FgBlack = "\x1b[30m";
FgRed = "\x1b[31m";
FgGreen = "\x1b[32m";
FgYellow = "\x1b[33m";
FgBlue = "\x1b[34m";
FgMagenta = "\x1b[35m";
FgCyan = "\x1b[36m";
FgWhite = "\x1b[37m";

BgBlack = "\x1b[40m";
BgRed = "\x1b[41m";
BgGreen = "\x1b[42m";
BgYellow = "\x1b[43m";
BgBlue = "\x1b[44m";
BgMagenta = "\x1b[45m";
BgCyan = "\x1b[46m";
BgWhite = "\x1b[47m";

///////////////////////////////////////////////////////////////////////////////////

app.listen(port, function(){
	console.log(FgBlue," __    __    _____ _____ _____    _____                     ");
	console.log("|  |  |  |  |   __|     |   __|  |   __|___ ___ _ _ ___ ___ ");
	console.log("|  |__|  |__|__   |-   -|   __|  |__   | -_|  _| | | -_|  _|");
	console.log("|_____|_____|_____|_____|__|     |_____|___|_|  \_/|___|_|  ");
	console.log(FgMagenta,"");
	console.log(" _____           _     _                                    ");
	console.log("|   __|_____ _ _| |___| |_ ___ ___                          ");
	console.log("|   __|     | | | | .'|  _| . |  _|                         ");
	console.log("|_____|_|_|_|___|_|__,|_| |___|_|                           ");
	console.log("");	
	console.log(FgGreen,"Port: ",port);
	console.log("Running locally unless otherwise modified...");
})
