import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HomeComponent, HeaderComponent],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet> 
    <app-home></app-home>
  `
  ,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-docker';
}
