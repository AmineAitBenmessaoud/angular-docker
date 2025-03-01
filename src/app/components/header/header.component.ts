import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
  // you can add providers : providers: [SignalService] if you want to use a service in this component
})
export class HeaderComponent {
  title = 'This is the title call'; //signal("") for using a signal

}
