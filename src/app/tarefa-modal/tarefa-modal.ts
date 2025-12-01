import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Tarefa } from '../models/tarefa.models';

@Component({
  selector: 'app-tarefa-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatIconModule, MatButtonModule],
  templateUrl: './tarefa-modal.html',
  styleUrls: ['./tarefa-modal.scss']
})
export class TarefaModal {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Tarefa
  ) {}

}
