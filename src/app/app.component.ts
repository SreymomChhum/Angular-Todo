import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NavComponent, RouterOutlet, LoginComponent],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
 
}
