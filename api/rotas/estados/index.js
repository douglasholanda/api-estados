const roteador = require("express").Router();
const TabelaEstado = require("./TabelaEstado");
const Estado = require("./Estado");

roteador.get("/", async (req, res) => {
    const resultados = await TabelaEstado.listar();
    res.status(200);
    res.send(JSON.stringify(resultados));
});

roteador.post("/", async (req, res) => {
    try {
        const dadosRecebidos = req.body;
        const estado = new Estado(dadosRecebidos);
        await estado.criar();
        res.status(201);
        res.send(JSON.stringify(estado));
    } catch (erro) {
        res.status(400);
        res.send(JSON.stringify({ mensagem: erro.message }));
    }
});

roteador.get("/:idEstado", async (req, res) => {
    try {
        const id = req.params.idEstado;
        const estado = new Estado({ id: id });
        await estado.carregar();
        res.status(200);
        res.send(JSON.stringify(estado));
    } catch (erro) {
        res.status(404);
        res.send(JSON.stringify({ mensagem: erro.message }));
    }
});

roteador.put("/:idEstado", async (req, res) => {
    try {
        const id = req.params.idEstado;
        const dadosReq = req.body;
        const dados = Object.assign({}, dadosReq, { id: id });
        const estado = new Estado(dados);
        await estado.atualizar();
        res.status(204);
        res.end();
    } catch (erro) {
        res.status(400);
        res.send(
            JSON.stringify({
                mensagem: erro.message,
            })
        );
    }
});

roteador.delete("/:idEstado", async (req, res) => {
    try {
        const id = req.params.idEstado;
        const estado = new Estado({ id: id });
        await estado.carregar();
        await estado.apagar();
        res.status(204);
        res.end();
    } catch (erro) {
        res.status(404);
        res.send(JSON.stringify({ mensagem: erro.message }));
    }
});

module.exports = roteador;
