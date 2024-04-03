class Departamento {
    constructor(nome) {
        this.nome = nome;
        this.funcionarios = [];
        this.departamentos = [];
    }

    addFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }

    removeFuncionario(funcionario) {
        const index = this.funcionarios.indexOf(funcionario);
        if (index !== -1) {
            this.funcionarios.splice(index, 1);
        }
    }

    addDepartamento(departamento) {
        this.departamentos.push(departamento);
    }

    removeDepartamento(departamento) {
        const index = this.departamentos.indexOf(departamento);
        if (index !== -1) {
            this.departamentos.splice(index, 1);
        }
    }
}

module.exports = Departamento;
