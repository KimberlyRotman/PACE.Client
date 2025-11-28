import { MateriaAluno } from './materia.models';

export interface Aluno {
  id: string;
  codigo: number;
  nome: string;
  email: string;
  admin: boolean;
  dataCriacao: Date;
  materias: MateriaAluno[];
}
