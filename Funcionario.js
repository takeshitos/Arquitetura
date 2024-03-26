
class Funcionario {
    constructor(nome, salario) {
        this.name = nome;
        this.salario = salario;
    }

    getSalario() {
        return this.salario;
    }
}

module.exports = Funcionario;
