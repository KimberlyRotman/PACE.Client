import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa.models';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private API = 'https://localhost:7064/tarefa';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}`);
  }

  getById(id: string): Observable<any> {
    return this.http.get<any>(`${this.API}/${id}`);
  }

  getTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.API);
  }

  cadastrar(tarefa: any): Observable<any> {
    return this.http.post(`${this.API}`, tarefa);
  }

  atualizar(tarefa: any): Observable<any> {
    return this.http.put(`${this.API}`, tarefa);
  }

  deletar(id: string): Observable<any> {
    return this.http.delete(`${this.API}/${id}`);
  }
}

