import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../auth.service';
import { User } from './usuario';

@Component({
  selector: 'app-autenticacao',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './autenticacao.component.html',
  styleUrl: './autenticacao.component.scss'
})
export class AutenticacaoComponent {

  usuario: User = new User();

  constructor(
    private authService: AuthService
  ) { }

  fazerLogin(){
    this.authService.fazerAutenticacao(this.usuario)
  }
}
