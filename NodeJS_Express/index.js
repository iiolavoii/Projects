var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");
var app = express();

mongoose.connect("mongodb://localhost:27017/NODEJS_EXPRESS");

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var Record = require("./models/recorde");

app.get("/", function (requisicao, resposta, proximo) {
  resposta.send("ok");
});
app.post("/", function (requisicao, resposta, proximo) {
  resposta.send({ text: requisicao.body.text });
});

app.listen(3000, function () {
  console.log("Porta 3000");
});
