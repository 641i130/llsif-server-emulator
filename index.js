const express = require("express");
const app = express();
 
// Define routes here ...

app.get("/", function(req, res) {
    res.send("You just did a get request!\n");
    console.log("Get request.");
});
app.post("/", function(req, res) {
    res.send("You just did a post request!\n");
    console.log("Post request.");
});


app.post("*", function(req, res) {
    console.log("Wildcard");
});
app.listen(3000, function(){
  console.log("server is running on port 3000");
})
