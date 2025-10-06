import {v4 as uuid} from 'uuid';

export class Aluno {
    id?: string;
    nome?: string;
    email?: string;
    senha?: number;

    static newAluno(){
        const aluno = new Aluno();
        aluno.id = uuid();
        return aluno;
    }
}