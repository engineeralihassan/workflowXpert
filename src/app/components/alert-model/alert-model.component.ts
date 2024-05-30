import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-model',
  standalone: true,
  imports: [],
  templateUrl: './alert-model.component.html',
  styleUrl: './alert-model.component.css'
})
export class AlertModelComponent {
@Input() message:any='This is the Message for success alert';
}
