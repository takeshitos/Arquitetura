class Turma{
    
    constructor({codigo, nota}){
        this._codigo = codigo;
        this._nota = nota;
    }

    aprovado(){
        return this._nota >= 6;
    }
    
}
export { Turma };