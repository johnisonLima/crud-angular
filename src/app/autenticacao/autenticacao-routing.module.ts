import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutenticacaoComponent } from './autenticacao/autenticacao.component';

const routes: Routes = [
  { path: '', component: AutenticacaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticacaoRoutingModule { }
