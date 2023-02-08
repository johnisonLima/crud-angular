import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // Minimizando e Maximizando os textos da Nav
    let container = document.querySelector(".container-fluid") as HTMLVideoElement;
    let responsiveBreakpoint = 768;


    window.addEventListener("load", function () {
      if (window.innerWidth <= responsiveBreakpoint) {
        container.classList.add("nav-closed");
      }
    });  

    window.addEventListener("load", function () {
      if (window.innerWidth > responsiveBreakpoint) {
        container.classList.remove("nav-closed");
      }
    }); 

    window.addEventListener("resize", function () {
      if (window.innerWidth <= responsiveBreakpoint) {
        container.classList.add("nav-closed");
      }
    });  

    window.addEventListener("resize", function () {
      if (window.innerWidth > responsiveBreakpoint) {
        container.classList.remove("nav-closed");
      }
    });   
  }

  toggleNav(){
    // Minimizando e Maximizando os textos da Nav
    let container = document.querySelector(".container-fluid") as HTMLVideoElement;    
    container.classList.toggle("nav-closed");
  }

}
