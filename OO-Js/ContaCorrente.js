export class ContaCorrente {
    agencia;
    _saldo = 0;

    depositar(valor) {
        if(valor < 0) return;
        this._saldo += valor;
        console.log("Comprovante de depósito de : R$", valor); 
    }

    sacar(valor) {
        if(valor > this.saldo) return;
        this._saldo -= valor;
        console.log("Valor sacado : R$", valor)
    }
}
