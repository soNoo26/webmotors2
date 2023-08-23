import { Veiculos } from "./veiculo";

class Carro extends Veiculos{
    portas: number;

    constructor(_marca: string, _modelo: string, _portas: number) {
        super(_marca, _modelo);
        this.portas = _portas;

    }

    Apresentar(): void {
        console.log(`Carro - Marca: ${this.marca}, Modelo: ${this.modelos}, Portas: ${this.portas}`);
    }
}
const carro1 = new Carro("Porsche", "911 GT3 992", 2);
carro1.Apresentar();