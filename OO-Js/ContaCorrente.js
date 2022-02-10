import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numContas = 0;

    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numContas++;
    }

    sacar(valor) {
        let taxa = 1.1;
        const valorSacado = taxa * valor;
        if(valorSacado > this.saldo) return;
        this._saldo -= valorSacado;
        return valorSacado;
        //console.log("Valor sacado : R$", valor)
    }

}
