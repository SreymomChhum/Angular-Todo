import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images=[
    {name: 'logo.jpg', caption: 'image1'},
    {name: 'logo.jpg', caption: 'image1'},
    {name: 'logo.jpg', caption: 'image1'},
  ]
}
