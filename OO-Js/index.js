import {Cliente} from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js";

const gerente = new Gerente("Fabio", 7000, 11122233345);
const diretor = new Diretor("Jessica", 10000, 22233344456);

console.log(gerente);
console.log(diretor);