export class SistemaAutentica{
    static login(autenticavel, senha){
        return autenticavel.autentica(senha);
    }
}