import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NavComponent, RouterOutlet],
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

}
