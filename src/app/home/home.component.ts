import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent], // this how you import a component
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    homeMessage = signal("Hello, World!");
}
