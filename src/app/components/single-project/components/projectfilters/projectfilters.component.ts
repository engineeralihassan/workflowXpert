import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-projectfilters',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './projectfilters.component.html',
  styleUrl: './projectfilters.component.css'
})
export class ProjectfiltersComponent {
icons=[faSearch];
names=['AH','MA','MA','NB','RA','AR']
}
