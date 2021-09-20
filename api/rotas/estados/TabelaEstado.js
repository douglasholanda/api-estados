const Modelo = require("./ModeloTabelaEstado");

module.exports = {
    listar() {
        return Modelo.findAll();
    },
    inserir(estado) {
        return Modelo.create(estado);
    },
    async pegarPorId(id) {
        const estado = await Modelo.findOne({
            where: { id: id },
        });

        if (!estado) {
            throw new Error("Estado não cadastrado");
        }

        return estado;
    },
    atualizar(id, dados) {
        return Modelo.update(dados, {
            where: { id: id },
        });
    },
    apagar(id) {
        return Modelo.destroy({
            where: { id: id },
        });
    },
};
