import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Jonathan";
cliente1.cpf = 11122233309;


const cliente2 = new Cliente();
cliente2.nome = "Nicole";
cliente2.cpf = 88822233309;
const contaCorrenteNicole = new ContaCorrente();
contaCorrenteNicole.agencia = 1001;
contaCorrenteNicole.cliente = cliente2;

const contaCorrenteJonathan = new ContaCorrente();
contaCorrenteJonathan.agencia = 1001;
contaCorrenteJonathan.cliente = cliente1;

contaCorrenteJonathan.depositar(1000);
contaCorrenteJonathan.sacar(50);
contaCorrenteJonathan.tranferir(500, contaCorrenteNicole);

console.log(contaCorrenteJonathan);
console.log(contaCorrenteNicole);

