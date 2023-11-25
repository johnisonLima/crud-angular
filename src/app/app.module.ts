import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AutenticacaoComponent } from './autenticacao/autenticacao/autenticacao.component';
import { AuthService } from './autenticacao/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AutenticacaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }