import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Jonathan";
cliente1.cpf = 11122233309;


const cliente2 = new Cliente();
cliente2.nome = "Nicole";
cliente2.cpf = 88822233309;

const contaCorrenteJonathan = new ContaCorrente();
contaCorrenteJonathan.agencia = 1001;

console.log(cliente1)
console.log(cliente2)

contaCorrenteJonathan.depositar(100)

console.log(contaCorrenteJonathan)

contaCorrenteJonathan.sacar(50);
