import { Veiculos } from "./veiculo";

class Moto extends Veiculos {
    cilindradas: number;
    
    constructor(_marca: string, _modelo: string, _cilindradas: number) {
        super(_marca, _modelo);
        this.cilindradas = _cilindradas;
    }
    
    apresentar(): void {
        console.log(`Moto - Marca: ${this.marca}, Modelo: ${this.modelos}, Cilindradas: ${this.cilindradas}`);
    }
}

const moto1 = new Moto("Honda", "CG 150", 150);
moto1.apresentar(); 