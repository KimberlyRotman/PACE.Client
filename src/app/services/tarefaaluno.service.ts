import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TarefaAluno } from '../models/tarefaaluno.model';

@Injectable({ providedIn: 'root' })
export class TarefaAlunoService {
  private api = 'https://localhost:7064/tarefasAluno';

  constructor(private https: HttpClient) {}

  getByAluno(id: string): Observable<TarefaAluno[]> {
    return this.https.get<TarefaAluno[]>(`${this.api}/${id}`);
  }

  updateStatus(id: string, status: number) {
    return this.https.put(`${this.api}/status`, { tarefaAlunoId: id, kambam: status });
  }
}
