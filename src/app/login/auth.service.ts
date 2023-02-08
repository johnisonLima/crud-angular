import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './login/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(
    private router: Router
  ) { }

  fazerLogin(usuario: User){
    if(usuario.nome === 'usuario@email.com' && usuario.senha === '123456'){
      this.usuarioAutenticado = true;
      
      this.router.navigate(['/dashboard']);
    }
    else{
      this.usuarioAutenticado = false;
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
