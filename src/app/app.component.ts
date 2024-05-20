import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { single } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
  users=signal<any[]>([
    1,2,3,4,5,6,7
  ])
  userName= signal<any>('Ali Hassan');
  user= this.users()[0];
}
