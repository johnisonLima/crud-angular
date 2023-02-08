import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login/login.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
