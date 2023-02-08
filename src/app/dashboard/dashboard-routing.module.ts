import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { SiteIdentityComponent } from './aspect/site-identity/site-identity.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', 
    component: DashboardComponent,
    children:[
      { path: 'home',         
        component: HomeComponent        
      },
      { path: 'aspect', 
        component: SiteIdentityComponent
      },
      { path: 'users', 
        component: UsersComponent
      },
      { path: 'settings', 
        component: SettingsComponent
      }, 
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
