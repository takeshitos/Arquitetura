class Organizacao {
    constructor(nome) {
        this.nome = nome;
        this.departamentos = [];
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

    getSalarioTotal() {
        let salarioTotal = 0;
        this.departamentos.forEach(departamento => {
            salarioTotal += this.calcularSalDepartamento(departamento);
        });
        return salarioTotal;
    }

    calcularSalDepartamento(departamento) {
        let deparSalario = 0;
        departamento.funcionarios.forEach(funcionario => {
            deparSalario += funcionario.getSalario();
        });
        departamento.departamentos.forEach(subDepartamento => {
            deparSalario += this.calcularSalDepartamento(subDepartamento);
        });
        return deparSalario;
    }
}

module.exports = Organizacao;
