import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MateriaService } from '../services/materia.service';
import { TarefaService } from '../services/tarefa.service';
import { Materia } from '../models/materia.models';
import { Tarefa } from '../models/tarefa.models';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TarefaModal } from '../tarefa-modal/tarefa-modal';
import { MatIconModule } from "@angular/material/icon";


@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.html',
  styleUrls: ['./tarefa.scss'],
  imports: [FormsModule, CommonModule, MatIconModule],
})
export class TarefaComponent implements OnInit {

  materias: Materia[] = [];
  tarefas: Tarefa[] = [];

  materiaSelecionada: string = '';

  constructor(
    private materiaService: MateriaService,
    private tarefaService: TarefaService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.materiaService.listarMaterias().subscribe(mats => {

      // 🔥 ORDENAÇÃO AQUI
      this.materias = mats.sort((a, b) => a.nome.localeCompare(b.nome));

      if (this.materias.length > 0) {
        this.materiaSelecionada = this.materias[0].id;
        this.carregarTarefas();
      }
    });
  }

  carregarTarefas() {
    if (!this.materiaSelecionada) return;

    this.tarefaService.listarTarefasPorMateria(this.materiaSelecionada)
      .subscribe(tarefas => {
        this.tarefas = tarefas;
      });
  }

abrirDetalhes(tarefa: Tarefa) {
  this.tarefaService.getTarefaById(tarefa.id).subscribe(t => {
    this.dialog.open(TarefaModal, {
      data: t,
      width: '450px'
    });
  });
}



  diasRestantes(dataEntrega?: Date | null): number {
    if (!dataEntrega) return 0;

    const hoje = new Date();
    const entrega = new Date(dataEntrega);
    const diff = entrega.getTime() - hoje.getTime();

    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }
}
