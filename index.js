const Funcionario = require('./Funcionario');
const Department = require('./Department');
const Organization = require('./Organization');

// Criando funcionários
const emp1 = new Funcionario("João", 5000);
const emp2 = new Funcionario("Maria", 6000);
const emp3 = new Funcionario("Carlos", 5500);

// Criando departamentos
const dept1 = new Department("TI");
const dept2 = new Department("Vendas");
const dept3 = new Department("Marketing");

// Adicionando funcionários aos departamentos
dept1.addEmployee(emp1);
dept1.addEmployee(emp2);
dept2.addEmployee(emp3);

// Criando subdepartamentos
const subDept1 = new Department("Desenvolvimento");
const subDept2 = new Department("Suporte");

// Adicionando subdepartamentos ao departamento de TI
dept1.addDepartment(subDept1);
dept1.addDepartment(subDept2);

// Criando organização
const organization = new Organization("Minha Empresa");

// Adicionando departamentos à organização
organization.addDepartment(dept1);
organization.addDepartment(dept2);
organization.addDepartment(dept3);

// Exibindo a estrutura da organização
console.log("Estrutura da Organização:");
console.log(organization);

// Calculando o salário total da organização
const totalSalary = organization.getSalaryTotal();
console.log("\nSalário Total da Organização: $" + totalSalary);
