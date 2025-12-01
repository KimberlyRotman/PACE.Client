import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa.models';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private baseUrl = 'https://localhost:7064/materia';

  constructor(private httpClient: HttpClient) {}

  listarTarefasPorMateria(materiaId: string): Observable<Tarefa[]> {
    return this.httpClient.get<Tarefa[]>(`${this.baseUrl}/${materiaId}/tarefas`);
  }

  getTarefaById(id: string): Observable<Tarefa> {
  return this.httpClient.get<Tarefa>(`https://localhost:7064/tarefa/${id}`);
}

}
