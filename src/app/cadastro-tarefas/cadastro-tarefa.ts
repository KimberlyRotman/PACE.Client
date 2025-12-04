import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MateriaService } from '../services/materia.service';
import { TarefaService } from '../services/tarefa.service';
import { PlataformaService } from '../services/plataforma.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cadastro-tarefa',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,     
    MatCardModule,
    MatIconModule,
    MatButtonModule],
  templateUrl: './cadastro-tarefa.html',
  styleUrls: ['./cadastro-tarefa.scss']
})
export class CadastroTarefa implements OnInit {

  materias:any[]=[];
  plataformas:any[]=[];

  tarefa:any = {
    titulo:'',
    descricao:'',
    tipo:1,
    maximoIntegrantes:1,
    apresentacao:false,
    dataEntrega:'',
    dataApresentacao:'',
    materiaId:'',
    plataformaId:''
  };

  constructor(
    private materiaService:MateriaService,
    private tarefaService:TarefaService,
    private plataformaService:PlataformaService
  ){}

  ngOnInit(){
    this.materiaService.listarMaterias().subscribe(r=> this.materias=r);
    this.plataformaService.listarPlataformas().subscribe((r: any[])=> this.plataformas=r);
  }

  cadastrar(){
    const dto = {
      titulo:this.tarefa.titulo,
      descricao:this.tarefa.descricao,
      tipo:this.tarefa.tipo,
      maximoIntegrantes:this.tarefa.maximoIntegrantes,
      apresentacao:this.tarefa.apresentacao,
      dataApresentacao:this.tarefa.dataApresentacao,
      dataEntrega:this.tarefa.dataEntrega,
      materia:{id:this.tarefa.materiaId},
      plataforma:{id:this.tarefa.plataformaId}
    };

    this.tarefaService.cadastrar(dto).subscribe({
      next:()=>alert("Tarefa cadastrada com sucesso"),
      error:e=>alert("Erro: "+e.error)
    });
  }
}
