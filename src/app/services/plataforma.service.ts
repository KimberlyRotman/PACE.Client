import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Plataforma {
  id: string;
  nome: string;
  link?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PlataformaService {
  private apiUrl = 'https://localhost:7064/api/plataforma'; // ajuste se necessário

  constructor(private http: HttpClient) {}

  listarPlataformas(): Observable<Plataforma[]> {
    return this.http.get<Plataforma[]>(this.apiUrl);
  }
}
