function Carro(modelo, marca, anoFabricacao, anoModelo, cor) {
    this.modelo = modelo;
    this.marca = marca;
    this.anoFabricacao = anoFabricacao;
    this.anoModelo = anoModelo;
    this.cor = cor;
}

function TipoCarro(modelo, marca, anoFabricacao, anoModelo, cor, acelerar) {
    let _acelerar = acelerar; 

    this.setAcelerarZeroA100 = function () {
        const deZeroA100 = 100 / 4; 
        _acelerar = deZeroA100;
        return `Faz de 0 a 100 em ${_acelerar}s`;
    }

    Carro.call(this, modelo, marca, anoFabricacao, anoModelo, cor);
}

function CarroPopular(modelo, marca, anoFabricacao, anoModelo, cor, acelerar) {
    TipoCarro.call(this, modelo, marca, anoFabricacao, anoModelo, cor, acelerar);
}


function CarroEsportivo(modelo, marca, anoFabricacao, anoModelo, cor, acelerar) {
    TipoCarro.call(this, modelo, marca, anoFabricacao, anoModelo, cor, acelerar);

    this.setAcelerarZeroA100 = function() {
        const deZeroA100 = 100 / 40; 
        return `Faz de 0 a 100 em ${deZeroA100.toFixed(1)}s`;
    }
}

function CarroEletrico(modelo, marca, anoFabricacao, anoModelo, cor, acelerar) {
    TipoCarro.call(this, modelo, marca, anoFabricacao, anoModelo, cor, acelerar);

    this.setAcelerarZeroA100 = function() {
        const deZeroA100 = 100 / 30;
        return `Faz de 0 a 100 em ${deZeroA100.toFixed(1)}s`;
    }
}

function CarroSUV(modelo, marca, anoFabricacao, anoModelo, cor, acelerar) {
    TipoCarro.call(this, modelo, marca, anoFabricacao, anoModelo, cor, acelerar);

    this.setAcelerarZeroA100 = function() {
        const deZeroA100 = 100 / 12;
        return `Faz de 0 a 100 em ${deZeroA100.toFixed(1)}s`;
    }
}

const carroDaVanus = new CarroPopular('Polo', 'Volkswagen', 2022, 2022, 'Prata', 0);
const carroDoAdriano = new CarroEsportivo('Huracán', 'Lamborghini', 2024, 2024, 'Preto', 0);
const carroDaCida = new CarroEletrico('Model S', 'Tesla', 2022, 2023, 'Branco', 0);
const carroDaLuisa= new CarroSUV('Cayenne S Coupé', 'Porsche', 2019, 2020, 'Prata', 0);

console.log(carroDaVanus.setAcelerarZeroA100());
console.log(carroDoAdriano.setAcelerarZeroA100())
console.log(carroDaCida.setAcelerarZeroA100());
console.log(carroDaLuisa.setAcelerarZeroA100());


