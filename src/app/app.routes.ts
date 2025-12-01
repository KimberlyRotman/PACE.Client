import { Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { Alunos } from './alunos/alunos';
import { Home } from './home/home';
import { Login } from './login/login';
import { TarefaComponent } from './tarefa/tarefa';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo:'home' },
    { path: 'cadastro', component: Cadastro },
    { path: 'alunos', component: Alunos },
    { path: 'home', component: Home },
    { path: 'login', component: Login },
    { path: 'tarefa', component: TarefaComponent },
];

