import { FlexAlignStyleBuilder } from '@angular/flex-layout';
import {v4 as uuid} from 'uuid';

export class Aluno {
    id?: string;
    nome?: string;
    email?: string;
    senha?: number;
    deletando: boolean = false;

    static newAluno(){
        const aluno = new Aluno();
        aluno.id = uuid();
        return aluno;
    }
}