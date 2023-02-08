import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';
import { SiteIdentityComponent } from './aspect/site-identity/site-identity.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    SiteIdentityComponent,
    SettingsComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
