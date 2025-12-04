import { Routes } from '@angular/router';
import { CadastroAluno } from './cadastro-alunos/cadastro-aluno';
import { Alunos } from './alunos/alunos';
import { Home } from './home/home';
import { Login } from './login/login';
import { TarefaComponent } from './tarefa/tarefa';
import { CadastroTarefa } from './cadastro-tarefas/cadastro-tarefa';
import { Matricula } from './matricula/matricula';
import { Calendario } from './calendario/calendario';
import { Kambam } from './kanbam/kanbam';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo:'home' },
    { path: 'cadastro-aluno', component: CadastroAluno },
    { path: 'alunos', component: Alunos },
    { path: 'home', component: Home },
    { path: 'login', component: Login },
    { path: 'tarefa', component: TarefaComponent },
    { path: 'cadastro-tarefa', component: CadastroTarefa },
    { path: 'matricula', component: Matricula },
    { path: 'calendario', component: Calendario },
    { path: 'kambam', component: Kambam }

];

