class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    #saldo = 0;

    depositar(valor) {
        if(valor > 0){
            this.#saldo += valor; 
        }
    }

    sacar(valor) {
        if(valor <= this.saldo){
            this.#saldo -= valor;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Jonathan";
cliente1.cpf = 11122233309;


const cliente2 = new Cliente();
cliente2.nome = "Nicole";
cliente2.cpf = 88822233309;

const contaCorrenteJonathan = new ContaCorrente();
contaCorrenteJonathan.agencia = 1001;
contaCorrenteJonathan.saldo = 0;


console.log(cliente1)
console.log(cliente2)

contaCorrenteJonathan.depositar(100)
contaCorrenteJonathan.sacar(50)

console.log(contaCorrenteJonathan)
