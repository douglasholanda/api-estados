const ModeloTabela = require("../rotas/estados/ModeloTabelaEstado");

ModeloTabela.sync()
    .then(console.log("Tabela criada com sucesso"))
    .catch(console.log);
