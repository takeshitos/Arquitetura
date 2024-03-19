import {Turma} from './Turma.js';

class TurmaPresencial extends Turma{
    
    constructor({codigo, aprovados, nota}){
        super(codigo, nota);
        this._frequencia = frequencia;
    }

    aprovado(){
        return this._frequencia >= 7;
    }
}
module.exports = {TurmaPresencial}