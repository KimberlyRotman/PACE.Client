import { Injectable } from '@angular/core';
import { Aluno } from './cadastro/aluno';
import { Alunos } from './alunos/alunos';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  static REPO_ALUNOS = "_ALUNOS";

  constructor(){}

  cadastrar(aluno: Aluno){
    const storage = this.obterStorage();
    storage.push(aluno);
    localStorage.setItem(AlunoService.REPO_ALUNOS, JSON.stringify(storage));
  }

  
  pesquisarAlunos(nome: string) : Aluno[] {
    return this.obterStorage();
  }

  private obterStorage() : Aluno[] {
    const repositorioAlunos = localStorage.getItem(AlunoService.REPO_ALUNOS);
    if(repositorioAlunos){
      const alunos: Aluno[] = JSON.parse(repositorioAlunos)
      return alunos;
    }
  
    const alunos: Aluno[] = [];
    localStorage.setItem(AlunoService.REPO_ALUNOS, JSON.stringify(alunos))
    return alunos;
  }
}
