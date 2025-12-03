import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AlunoService } from '../services/aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
    MatTableModule
  ],
  templateUrl: './alunos.html',
  styleUrls: ['./alunos.scss']
})


export class Alunos implements OnInit {
  nomeBusca: string = '';
  listaAlunos: any[] = [];
  colunasTable: string[] = ['id', 'nome', 'email', 'acoes'];

  constructor(
    private service: AlunoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.carregarLista();
  }

  carregarLista() {
    this.service.getAll().subscribe({
      next: alunos => this.listaAlunos = alunos,
      error: err => alert('Erro ao carregar alunos: ' + err.error)
    });
  }

  pesquisar() {
    if (!this.nomeBusca.trim()) {
      this.carregarLista();
      return;
    }

    const termo = this.nomeBusca.toLowerCase();
    this.listaAlunos = this.listaAlunos.filter(a =>
      a.nome.toLowerCase().includes(termo) ||
      a.email.toLowerCase().includes(termo)
    );
  }

  preparaEditar(id: string) {
    this.router.navigate(['/cadastro'], { queryParams: { id } });
  }

  preparaDeletar(aluno: any) {
    aluno.deletando = true;
  }

  deletar(aluno: any) {
    this.service.deletar(aluno.id).subscribe({
      next: () => this.carregarLista(),
      error: err => alert('Erro ao deletar: ' + err.error)
    });
  }

  cancelar(aluno: any) {
    aluno.deletando = false;
  }
}
