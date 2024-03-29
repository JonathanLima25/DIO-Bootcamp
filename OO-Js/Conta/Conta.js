export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não pode instanciar a classe Conta.")
        }
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
        throw new Error("Metodo abstrato.")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(valorSacado > this.saldo) return 0;
        this._saldo -= valorSacado;
        return valorSacado;
        //console.log("Valor sacado : R$", valor)
    }

    tranferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}