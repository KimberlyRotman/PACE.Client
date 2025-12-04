import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { AlunoService } from '../services/aluno.service';


@Component({
  selector: 'app-login',
  imports: [FlexLayoutModule, 
            MatCardModule, 
            FormsModule, 
            MatFormFieldModule, 
            MatInputModule,
            MatIconModule,
            MatButtonModule,
            RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  email: string = '';
  senha: string = '';

  constructor(private alunoService: AlunoService, private router: Router) {}

  login() {
    const dados = { email: this.email, senha: this.senha };

    this.alunoService.login(dados).subscribe({
    next: (res: any) => {
    alert("Login realizado!");

    localStorage.setItem('aluno', JSON.stringify(res));

    localStorage.setItem('alunoId', res.id); 

    this.router.navigate(['/matricula']);
  },
  error: err => {
    alert(err.error || "Falha ao logar");
  }
});

  }
}
