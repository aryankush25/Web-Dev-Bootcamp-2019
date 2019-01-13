const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3;
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
    //res.send("Hello World");
});

app.post("/", function(req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    res.send("The Calculation is "+ (num1 + num2));
});

app.listen(PORT, function() {
    console.log("Listning on "+ PORT +" PORT");
});
