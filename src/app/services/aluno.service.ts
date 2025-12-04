import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private readonly API = 'https://localhost:7064/Aluno';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}`);
  }

  getById(id: string): Observable<any> {
    return this.http.get<any>(`${this.API}/${id}`);
  }

  cadastrar(aluno: any): Observable<any> {
    return this.http.post(`${this.API}/cadastro`, aluno);
  }

  atualizar(aluno: any): Observable<any> {
    return this.http.put(`${this.API}`, aluno);
  }

  deletar(id: string): Observable<any> {
    return this.http.delete(`${this.API}/${id}`);
  }

  login(data: { email: string; senha: string }): Observable<any> {
  return this.http.post(`${this.API}/login`, data);
}

}
