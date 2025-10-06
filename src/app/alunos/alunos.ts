import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../cadastro/aluno';

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

  listaClientes: Aluno[] = [];
  colunasTable: string[] = ["id", "nome", "email"]

  constructor(private service: AlunoService){
    
  }

  ngOnInit(){
     this.listaClientes = this.service.pesquisarAlunos('');
  }
}
