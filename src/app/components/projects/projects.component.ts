import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects:any[]=[{
    name:'project 1',
    img:'../..//../assets/Images/project-logo-1.png'  
  },
  {
    img:'../..//../assets/Images/project-logo-2.jpeg',
    name: 'project 2'
  },
  {
    name:'project 3',
    img:'../..//../assets/Images/brand-logo-4.avif'
  },
  {
    name:'project 4',
    img:'../..//../assets/Images/brand-logo-3.avif'
  }

]
plusIcon=faAdd
}
