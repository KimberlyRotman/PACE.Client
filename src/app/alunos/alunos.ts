import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AlunoService } from '../services/aluno.service';
import { Aluno } from '../cadastro/aluno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alunos',
  imports: [MatInputModule, 
            MatCardModule, 
            FlexLayoutModule, 
            MatIconModule,
            MatButtonModule,
            FormsModule,
            CommonModule,
            MatTableModule],
  templateUrl: './alunos.html',
  styleUrl: './alunos.scss'
})
export class Alunos implements OnInit{

  nomeBusca: string = '';
  listaClientes: Aluno[] = [];
  colunasTable: string[] = ["id", "nome", "email", "acoes"];

  constructor(
    private service: AlunoService,
    private router: Router
  ){
    
  }

  ngOnInit(){
     this.listaClientes = this.service.pesquisarAlunos('');
  }

  pesquisar(){
    this.listaClientes = this.service.pesquisarAlunos(this.nomeBusca)
  }

  preparaEditar(id: string){
    this.router.navigate(['./cadastro'], {queryParams: {"id": id}})
  }

  preparaDeletar(aluno: Aluno){
    aluno.deletando = true;
  }

  deletar(aluno: Aluno){
    this.service.deletar(aluno);
    this.listaClientes = this.service.pesquisarAlunos('');
  }

  cancelar(aluno: Aluno){
    aluno.deletando = false;
  }
}
