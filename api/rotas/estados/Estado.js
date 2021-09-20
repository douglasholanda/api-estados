const TabelaEstado = require("./TabelaEstado");
class Estado {
    constructor({ id, nome, populacao, capital, area }) {
        this.id = id;
        this.nome = nome;
        this.populacao = populacao;
        this.capital = capital;
        this.area = area;
    }

    async criar() {
        const resultado = await TabelaEstado.inserir({
            nome: this.nome,
            populacao: this.populacao,
            capital: this.capital,
            area: this.area,
        });
        this.id = resultado.id;
    }
    async carregar() {
        const resultado = await TabelaEstado.pegarPorId(this.id);
        this.nome = resultado.nome;
        this.populacao = resultado.populacao;
        this.capital = resultado.capital;
        this.area = resultado.area;
    }
    async atualizar() {
        await TabelaEstado.pegarPorId(this.id);
        const campos = ["nome", "populacao", "capital", "area"];
        const dadosAtualizar = {};

        campos.forEach((campo) => {
            const valor = this[campo];
            if (campo === "nome" || campo === "capital") {
                if (typeof valor === "string" && valor.length > 0) {
                    dadosAtualizar[campo] = valor;
                }
            }
            if (campo === "populacao" || campo === "area") {
                if (typeof valor === "number" && valor !== 0) {
                    dadosAtualizar[campo] = valor;
                }
            }
        });

        if (Object.keys(dadosAtualizar).length === 0) {
            throw new Error(
                "Não foram passados dados para atualizar ou tipo incorreto de dado incorreto!"
            );
        }

        await TabelaEstado.atualizar(this.id, dadosAtualizar);
    }
    apagar() {
        return TabelaEstado.apagar(this.id);
    }
}

module.exports = Estado;
