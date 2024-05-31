import { Component } from '@angular/core';
import { SkeltonLoaderComponent } from '../skelton-loader/skelton-loader.component';
import { ProjectfiltersComponent } from './components/projectfilters/projectfilters.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBook, faEllipsis } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule,SkeltonLoaderComponent,ProjectfiltersComponent],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.css'
})
export class SingleProjectComponent {
isLoading=false;
icons=[faEllipsis,faBook]
ngOnInit(){
  // this.isLoading=true;
  setTimeout(()=>{
    this.isLoading=false;
  },5000)
}
}
