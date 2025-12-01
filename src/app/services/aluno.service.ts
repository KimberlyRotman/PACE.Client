import { Injectable } from '@angular/core';
import { Aluno } from '../cadastro/aluno';

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

  atualizar(aluno: Aluno){
    const storage = this.obterStorage();
    storage.forEach(a => {
      if(a.id === aluno.id){
        Object.assign(a, aluno);
      }
    })
  }

  deletar(aluno: Aluno){
    const storage = this.obterStorage();
    
    const novaLista = storage.filter(a => a.id !== aluno.id);

    localStorage.setItem(AlunoService.REPO_ALUNOS, JSON.stringify(novaLista));
  }
  
  pesquisarAlunos(nomeBusca: string) : Aluno[] {
    const alunos = this.obterStorage();

    if(!nomeBusca){
      return alunos;
    }

    return alunos.filter(aluno => aluno.nome?.indexOf(nomeBusca) !== -1)
  }

  buscarAlunoPorId(id: string) : Aluno | undefined{
    const alunos = this.obterStorage();
    return alunos.find(aluno => aluno.id === id)
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
