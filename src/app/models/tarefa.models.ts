import { Plataforma } from './plataforma.model';
import { Materia } from './materia.models';

export enum TipoTarefa {
  Prova = 1,
  Atividade = 2,
  Trabalho = 3
}

export interface Tarefa {
  id: string;
  codigo: number;
  titulo: string;
  descricao?: string | null;
  maximoIntegrantes: number;
  tipo: TipoTarefa;
  apresentacao: boolean;
  dataApresentacao?: Date | null;
  dataEntrega?: Date | null;
  dataCriacao: Date;
  plataformaId: string;
  plataforma: Plataforma;
  materia: Materia;
}


export interface TarefaAluno {

}


