// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  let ipaddress = request.headers["x-forwarded-for"].split(",")[0];
  let language = request.headers["accept-language"].split(",")[0];
  let str = request.headers["user-agent"];
  let software = str.substring(str.indexOf("(")+1, str.indexOf(")"));

  let output = {ipaddress: ipaddress, language: language, software: software};
  //console.log(output);
  response.send(JSON.stringify(output));
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
