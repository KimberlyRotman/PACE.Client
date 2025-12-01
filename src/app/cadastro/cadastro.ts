import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AlunoService } from '../services/aluno.service';
import { Aluno } from './aluno';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.scss']
})
export class Cadastro implements OnInit{
  aluno: Aluno = Aluno.newAluno();
  atualizando: boolean = false;

  constructor(
    private service: AlunoService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe( (query: any) =>  {
      const params = query['params']
      const id = params['id']
      if(id){
        let clienteEncontrado = this.service.buscarAlunoPorId(id);
        if(clienteEncontrado){
          this.atualizando = true;
          this.aluno = clienteEncontrado;
        }else{
          this.aluno = Aluno.newAluno();
        }
      }
    })
  }

  cadastrar() {
    if(!this.atualizando){
      this.service.cadastrar(this.aluno);
      this.aluno = Aluno.newAluno();
    } else {
      this.service.atualizar(this.aluno);
      this.router.navigate(['/consulta'])
    }

  }
}
