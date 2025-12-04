import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TarefaAlunoService } from '../services/tarefaaluno.service';
import { TarefaAluno } from '../models/tarefaaluno.model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TarefaModal } from '../tarefa-modal/tarefa-modal';

@Component({
  selector: 'app-kanbam',
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule,
    MatDialogModule,
    DatePipe,
  ],
  templateUrl: './kanbam.html',
  styleUrls: ['./kanbam.scss']
})
export class Kambam implements OnInit {

  todo:TarefaAluno[]=[];
  doing:TarefaAluno[]=[];
  done:TarefaAluno[]=[];

  alunoId = localStorage.getItem("alunoId") ?? "";

  constructor(private service:TarefaAlunoService, private dialog:MatDialog){}

ngOnInit(){
  if(!this.alunoId){
    alert("Nenhum aluno encontrado. Faça login.");
    return;
  }
  this.load();
}

  load(){
    this.service.getByAluno(this.alunoId).subscribe(data=>{
      this.todo = data.filter(t=>t.kambam==0);
      this.doing = data.filter(t=>t.kambam==1);
      this.done = data.filter(t=>t.kambam==2);
    })
  }

  drop(event:CdkDragDrop<TarefaAluno[]>, coluna:number){
    if(event.previousContainer===event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,event.currentIndex);
      const tarefa = event.container.data[event.currentIndex];
      this.service.updateStatus(tarefa.id, coluna).subscribe();
    }
  }

  abrir(t:TarefaAluno){
    this.dialog.open(TarefaModal,{ data:t });
  }
}
