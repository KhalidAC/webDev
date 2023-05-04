const express= require ("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){
    const url = "https://api.openweathermap.org/data/3.0/weather?q=Ottawa&units=metric&appid=9f01ac8b9dd864c81bf8df4a6b0d9453";
    https.get(url,function(response){
        console.log(response.statusCode);
    });
    res.send("Server is running...");
});


app.listen(3000, function(){
    console.log("Server running on port 3000");
});

