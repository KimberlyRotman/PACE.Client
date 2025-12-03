import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AlunoService } from '../services/aluno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../models/aluno.models';

@Component({
  selector: 'app-cadastro-tarefa',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './cadastro-aluno.html',
  styleUrls: ['./cadastro-aluno.scss']
})
export class CadastroAluno implements OnInit {

  aluno: Aluno = new Aluno();
  atualizando = false;

  constructor(
    private service: AlunoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.atualizando = true;
        this.service.getById(id).subscribe({
          next: aluno => this.aluno = aluno,
          error: err => alert(err.error)
        });
      }
    });
  }

  cadastrar() {
    if (!this.atualizando) {
      this.service.cadastrar(this.aluno).subscribe({
        next: () => {
          alert("Aluno cadastrado!");
          this.aluno = new Aluno();
        },
        error: err => alert(err.error)
      });

    } else {
      this.service.atualizar(this.aluno).subscribe({
        next: () => {
          alert("Aluno atualizado!");
          this.router.navigate(['/consulta']);
        },
        error: err => alert(err.error)
      });
    }
  }
}
