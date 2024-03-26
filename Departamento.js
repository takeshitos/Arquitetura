class Departmento {
    constructor(nome) {
        this.nome = nome;
        this.funcionarios = [];
        this.departmentos = [];
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

    addDepartmento(departmento) {
        this.departmentos.push(departmento);
    }

    removeDepartmento(department) {
        const index = this.departmentos.indexOf(department);
        if (index !== -1) {
            this.departmentos.splice(index, 1);
        }
    }
}

module.exports = Departmento;
