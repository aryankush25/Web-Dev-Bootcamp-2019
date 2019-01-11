const express = require('express');
const app = express();

app.get("/", function(request, response) {
    response.send("Hello World");
});

app.get("/contact", function(request, response) {
    response.send("This is contact page");
});

app.get("/about", function(request, response) {
    response.send("This is Aryan Agarwal");
});

app.listen(3000, function() {
    console.log("Listning on 3000 server");
});
