import { Aluno } from './aluno.models';
import { Professor } from './professor.models';
import { Tarefa } from './tarefa.models';

export interface Materia {
  id: string;
  codigo: number;
  nome: string;
  professorId: string;
  professor: Professor;
  dataCriacao: Date;
  tarefas: Tarefa[];
  alunos: MateriaAluno[];
}

export interface MateriaAluno {
  id: string;
  alunoId: string;
  aluno: Aluno;
  materiaId: string;
  materia: Materia;
}

export interface MatriculaRequest {
  alunoId: string;
  materiaId: string;
}

