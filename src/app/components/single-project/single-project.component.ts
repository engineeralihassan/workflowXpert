import { Component } from '@angular/core';
import { SkeltonLoaderComponent } from '../skelton-loader/skelton-loader.component';
import { ProjectfiltersComponent } from './components/projectfilters/projectfilters.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule,SkeltonLoaderComponent,ProjectfiltersComponent],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.css'
})
export class SingleProjectComponent {

}
