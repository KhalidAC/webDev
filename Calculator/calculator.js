// jshint esversion:6

const express = require("express")();
//will help with extracting posted values
const bodyParser = require("body-parser");


const app = express;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
    res.sendFile(__dirname+"/index.html")
});

app.post("/", function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send("The addition of the two numbers is: " + result);
});


app.listen(3000, function () {
    console.log("Server running on port 3000")
});