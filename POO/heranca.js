function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz olá")
    }

    this.dizCargo = function() {
        console.log(this.cargo)
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    // this.salario = salario;

    // Cria atributo privado 
    let _salario = salario;

    // por convenção utiliza as palavras get e set quando esta acessado atributos privado get = pega e set = definir   

    // acessa atributos privados
    this.getSalario = function() {
        return _salario
    }

    this.setSalario = function(valor) {
        if(typeof valor === "number") {
            _salario = valor.toFixed(2)
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario.toFixed(2);
    }

    // herda as caracteristicas da outra class
    Pessoa.call(this, nome)
}


// Polimorfismo  capacidade de uma class ter comportamento diferente em outra class.
function Estagiario(nome) {
    Funcionario.call(this, nome, 'Estagiário', 5000);

    this.aumento = function() {
        const newSalary = this.getSalario() * 1.07;
        this.setSalario(newSalary);
    }
}

function Gerente(nome) {
    Funcionario.call(this, nome, 'Gerente', 50000);

    this.aumento = function() {
        const newSalary = this.getSalario() * 1.15;
        this.setSalario(newSalary);
    }
}

const funcionario1 = new Funcionario('Maria', 'Dev Front-end', 15000);
const funcionario2 = new Estagiario('Tommy');
const funcionario3 = new Gerente('Vanusa')



funcionario1.aumento();
console.log(funcionario1.getSalario());

funcionario2.aumento();
console.log(funcionario2.getSalario());

funcionario3.aumento();
console.log(funcionario3.getSalario());