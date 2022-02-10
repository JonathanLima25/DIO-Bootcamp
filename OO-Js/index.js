import {Cliente} from "./Cliente.js"
import { Conta } from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Jonathan", 11122233309);
const cliente2 = new Cliente("Nicole", 88822233309);

const contaCorrenteNicole = new ContaCorrente(cliente2, 1001);
const contaCorrenteJonathan = new ContaCorrente(cliente1, 1001);

contaCorrenteJonathan.depositar(1000);
contaCorrenteJonathan.sacar(50);
contaCorrenteJonathan.tranferir(500, contaCorrenteNicole);

console.log(contaCorrenteJonathan);
console.log(contaCorrenteNicole);
console.log(ContaCorrente.numContas);

// const conta = new Conta(0, cliente2, 1001);

