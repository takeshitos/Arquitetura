class Organizacao {
    constructor(nome) {
        this.nome = nome;
        this.departamentos = [];
    }

    addDepartmento(departamento) {
        this.departamentos.push(departamento);
    }

    removeDepartmento(departamento) {
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
            deparSalario += funcionario.getSalary();
        });
        departamento.departmentos.forEach(subDepartmento => {
            deparSalario += this.calcularSalDepartamento(subDepartmento);
        });
        return deparSalario;
    }
}

module.exports = Organizacao;
