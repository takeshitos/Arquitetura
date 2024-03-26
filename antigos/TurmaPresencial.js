import {Turma} from './Turma.js';

class TurmaPresencial extends Turma{
    
    constructor({codigo, aprovados, nota}){
        super(codigo, nota);
        this._frequencia = frequencia;
    }

    aprovado(){
        return super.aprovado() && this.frequencia >= 70;
    }
}
module.exports = {TurmaPresencial}