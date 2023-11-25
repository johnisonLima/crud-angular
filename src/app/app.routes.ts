import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'autenticacao' },
    { 
        path: 'autenticacao', 
        loadChildren: () => import('./autenticacao/autenticacao.module').then(m => m.AutenticacaoModule) 
    },
    { 
        path: 'home', 
        loadChildren: () => import('./modulos/modulos.module').then(m => m.ModulosModule)
      }
];
