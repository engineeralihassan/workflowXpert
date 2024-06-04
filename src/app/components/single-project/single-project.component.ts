import { ChangeDetectionStrategy, Component, PLATFORM_ID, afterNextRender, inject } from '@angular/core';
import { SkeltonLoaderComponent } from '../skelton-loader/skelton-loader.component';
import { ProjectfiltersComponent } from './components/projectfilters/projectfilters.component';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAdd, faBook, faEllipsis, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { DashboardService } from '../../services/dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { TaskMetaComponent } from '../task-meta/task-meta.component';
import { TaskDescriptionComponent } from '../task-description/task-description.component';
import { TaskCommentsComponent } from '../task-comments/task-comments.component';
import { AddTaskModalComponent } from '../add-task-modal/add-task-modal.component';


@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule,SkeltonLoaderComponent,ProjectfiltersComponent,HttpClientModule,TaskMetaComponent,TaskDescriptionComponent,TaskCommentsComponent,AddTaskModalComponent],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.css',
})
export class SingleProjectComponent {
isLoading=false;
isLoadtaskData:any
icons=[faEllipsis,faBook,faAdd,faPencil,faTrash]
plateform= inject(PLATFORM_ID);
service= inject(DashboardService)
constructor() {
  afterNextRender(() => {
    console.log(
      'constructor',
      this.plateform,
      localStorage.getItem('token')
    );
  });
}

ngOnInit(){
  console.log("Calls logs");
  if(isPlatformServer(this.plateform)){
  //   console.log("Hurray babo badi badi badi");
  }
  if(isPlatformBrowser(this.plateform)){
   // console.log(" browser command Hurray babo badi badi badi");
 }
  this.isLoading=true;
  this.service.fakeCall().subscribe((data)=>{
    // console.log("The data is loading",data);
    this.isLoading=false;
  });


}
loadTaskData(){
  this.isLoadtaskData=true;
  this.service.fakeCall().subscribe((data)=>{
   this.isLoadtaskData=false;
  });

}
}
