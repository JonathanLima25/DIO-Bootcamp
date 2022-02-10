export class Funcionario {
    constructor(nome, salario, cpf){
        if(this.constructor == Funcionario) throw new Error("Funcionario é abstrata");
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;

        this._bonificacao = 1;
        this._senha;
    }

    autentica(senha){
        return senha == this._senha;
    }
    cadastrarSenha(senha){
        this._senha = senha;
    }
}