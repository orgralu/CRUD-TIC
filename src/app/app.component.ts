import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectJuan';
  
  
  constructor(private router: Router) {}

  isHomeRoute() {
    if (this.router.url === '/list-empleado'){
      return this.router.url === '/list-empleado';
    }
    if (this.router.url === '/add-empleado'){
      return this.router.url === '/add-empleado';
    }
    if (this.router.url === '/php'){
      return this.router.url === '/php';
    }
    return 0;
  }

  isPhpRoute(){
    if (this.router.url === '/php'){
      return this.router.url === '/php';
    }
    if (this.router.url === '/phpjs'){
      return this.router.url === '/phpjs';
    }
    return 0;
  }

}
