export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

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