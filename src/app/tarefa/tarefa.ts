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
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  templateUrl: './tarefa.html',
  styleUrls: ['./tarefa.scss'],
  imports: [FormsModule, CommonModule, MatIconModule, MatButtonModule],
})
export class TarefaComponent implements OnInit {

  materias: Materia[] = [];
  tarefas: Tarefa[] = [];

  materiaSelecionada: string = '';

  constructor(
    private materiaService: MateriaService,
    private tarefaService: TarefaService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  navegarParaCadastro() {
    this.router.navigate(['/cadastro-tarefa']);
  }

  ngOnInit(): void {
    this.materiaService.listarMaterias().subscribe((mats: Materia[]) => {

      this.materias = mats.sort((a, b) => a.nome.localeCompare(b.nome));

      if (this.materias.length > 0) {
        this.materiaSelecionada = this.materias[0].id;
        this.carregarTarefas();
      }
    });
  }

carregarTarefas() {
  if (!this.materiaSelecionada) return;

  this.materiaService.listarTarefasPorMateria(this.materiaSelecionada)
    .subscribe({
      next: (tarefas: Tarefa[]) => {
        console.log("TAREFAS BUSCADAS:", tarefas);
        this.tarefas = tarefas;
      },
      error: e => console.error("Erro ao carregar tarefas:", e)
    });
}


  abrirDetalhes(tarefa: Tarefa) {
    this.tarefaService.getById(tarefa.id).subscribe((t: Tarefa) => {
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
