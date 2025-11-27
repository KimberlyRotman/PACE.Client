import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Login } from "../login/login";

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatIconModule, RouterModule, Login],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
