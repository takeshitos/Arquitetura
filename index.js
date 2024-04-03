const Funcionario = require('./Funcionario.js');
const Departamento = require('./Departamento');
const Organizacao = require('./Organizacao');

// Criando funcionários
const fun1 = new Funcionario("João", 5000);
const fun2 = new Funcionario("Maria", 6000);
const fun3 = new Funcionario("Carlos", 5500);

// Criando departamentos
const dept1 = new Departamento("TI");
const dept2 = new Departamento("Vendas");
const dept3 = new Departamento("Marketing");

// Adicionando funcionários aos departamentos
dept1.addFuncionario(fun1);
dept1.addFuncionario(fun2);
dept2.addFuncionario(fun3);

// Criando subdepartamentos
const subDept1 = new Departamento("Desenvolvimento");
const subDept2 = new Departamento("Suporte");

// Adicionando subdepartamentos ao departamento de TI
dept1.addDepartamento(subDept1);
dept1.addDepartamento(subDept2);

// Criando organização
const organizacao = new Organizacao("Minha Empresa");

// Adicionando departamentos à organização
organizacao.addDepartamento(dept1);
organizacao.addDepartamento(dept2);
organizacao.addDepartamento(dept3);

// Exibindo a estrutura da organização
console.log("Estrutura da Organização:");
console.log(organizacao);

// Calculando o salário total da organização
const salarioTotal = organizacao.getSalarioTotal();
console.log("\nSalário Total da Organização: $" + salarioTotal);
