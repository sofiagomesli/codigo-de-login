const express = require("express");
const caminho = require("path");

const app = express();
const porta = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(caminho.join(__dirname,"public","index.html"));
});



app.listen(porta,() =>{
    console.log("http://localhost:"+porta);
});