import {Cliente} from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutentica } from "./Funcionario/SistemaAutentica.js";

const gerente = new Gerente("Fabio", 7000, 11122233345);
const diretor = new Diretor("Jessica", 10000, 22233344456);
const cliente = new Cliente("Kelvin", 43264576556, "10");

diretor.cadastrarSenha("123");

const login = SistemaAutentica.login(cliente, "10");

console.log(login);