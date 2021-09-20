const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("config");
const roteador = require("./rotas/estados");

app.use(bodyParser.json());

app.use("/api/state", roteador);

app.listen(config.get("api.porta"), () => {
    console.log("API FUNCIONANDO");
});
