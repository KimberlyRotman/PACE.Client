export interface TarefaAluno {
  id: string;
  tarefaId: string;
  alunoId: string;
  equipeId?: string;
  kambam: number;      // 0 ToDo | 1 Doing | 2 Done
  enviado: boolean;
  dataCadastro: string;

  tarefa: {
    id: string;
    titulo: string;
    descricao: string;
    dataEntrega: string;
    maximoIntegrantes: number;
    plataforma?: { nome: string };
    materia?: { nome: string };
  }
}
