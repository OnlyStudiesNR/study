//Formas de criar objeto em javascript
const carrDaAna = {
    modelo: 'KA',
    fabricante: 'Ford',
    anoModelo: 2023,
    anoFabricacao: 2022,
    acelerar: function() {
        console.log("Vrum");
    }
}


function Carro(modelo, fabricacao, anoModelo, anoModelo) {
    this.modelo = modelo;
    this.fabricacao = fabricacao;
    this.anoModelo = anoModelo;
    this.anoFabricacao =  anoModelo;
    this.acelerar = function() {
        console.log('Acelerar');
    }
}


const carroDoAdriano = new Carro("Cope", "Porsche", 2025, 2025);

console.log(carrDaAna)
console.log(carroDoAdriano)

const nome1 = "Jeova";
const num = 19080475210205000350098e0084721212100;

//verifica o tipo de dado da um elemento.
console.log( typeof nome1, typeof num);

//Verifica o tipo de uma instância customisada.
console.log(carrDaAna instanceof Carro);



// acessando propriedade de objetos

console.log(carroDoAdriano.modelo)
console.log(carrDaAna['modelo'])

//cria objetos  e adiciona valor a ele
pessoa = new Object();
pessoa['nome'] = 'Adri'

//torna o objeto inmutavel
Object.freeze(pessoa)

// verifica se um objeto existe mas se tiver NUll ou undefined retorara falso messo se o objeto existir
if (pessoa['nome']) {
    console.log("ok")
}

// Faz uma verificação mais eficas
if ('nome' in pessoa){
    console.log('ok')
}

// Podemos tranformar um objeto em um array, isso e util para ver a quantidade de atributos que tem em um objeto

console.log(Object.keys(carrDaAna))
//size object
console.log(Object.keys(carrDaAna).length)
// get values of object
console.log(Object.values(carrDaAna))
