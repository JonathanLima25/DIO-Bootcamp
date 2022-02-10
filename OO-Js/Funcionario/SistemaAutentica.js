export class SistemaAutentica{
    static login(autenticavel, senha){
        if(SistemaAutentica.ehAutenticavel(autenticavel)){
            return autenticavel.autentica(senha);
        }
        return false;
    }
    static ehAutenticavel(autenticavel){
        return "autentica" in autenticavel;
    }
}