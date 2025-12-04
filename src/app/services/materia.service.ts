import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materia } from '../models/materia.models';
import { Tarefa } from '../models/tarefa.models';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  private baseUrl = 'https://localhost:7064/materia';

  constructor(private http: HttpClient) {}

  listarMaterias(): Observable<Materia[]> {
    return this.http.get<Materia[]>(this.baseUrl);
  }

  listarTarefasPorMateria(materiaId: string): Observable<Tarefa[]>  {
    return this.http.get<Tarefa[]>(`${this.baseUrl}/${materiaId}/tarefas`);
  }
}
