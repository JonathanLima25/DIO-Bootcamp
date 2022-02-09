import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numContas = 0;
    agencia;
    _cliente;
    _saldo = 0;

    get saldo(){
        return this._saldo;
    }

    set cliente(valor) {
        if(valor instanceof Cliente){
            this._cliente = valor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    constructor(cliente, agencia){
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numContas++;
    }

    depositar(valor) {
        if(valor < 0) return;
        this._saldo += valor;
        //console.log("Comprovante de depósito de : R$", valor); 
    }

    sacar(valor) {
        if(valor > this.saldo) return;
        this._saldo -= valor;
        return valor;
        //console.log("Valor sacado : R$", valor)
    }

    tranferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
