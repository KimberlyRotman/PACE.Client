import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MateriaService } from '../services/materia.service';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matricula',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: './matricula.html',
  styleUrls: ['./matricula.scss']
})
export class Matricula implements OnInit {

  materias: any[] = [];
  aluno: any;

  constructor(
    private materiaService: MateriaService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.aluno = JSON.parse(localStorage.getItem('aluno')!); 

    this.materiaService.listarMaterias().subscribe(r => {
      this.materias = r.map(m => ({ ...m, selecionada:false }));
    });
  }

  matricular(){
    const selecionadas = this.materias.filter(m => m.selecionada);

    if(selecionadas.length === 0){
      alert("Selecione ao menos uma matéria!");
      return;
    }

    selecionadas.forEach(m => {
      const request = { alunoId: this.aluno.id, materiaId: m.id };

      this.http.post('https://localhost:7064/aluno/matricular', request)
      .subscribe({
        next: () => console.log("Matriculado em:", m.nome),
        error: (e) => alert("Erro ao matricular: " + e.error),
      });
    })

    alert("Matrícula concluída!");
    this.router.navigate(['/kambam']);
  }

}
