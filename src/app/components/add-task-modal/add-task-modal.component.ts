import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill'

@Component({
  selector: 'app-add-task-modal',
  standalone: true,
  imports: [QuillModule,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './add-task-modal.component.html',
  styleUrl: './add-task-modal.component.css'
})
export class AddTaskModalComponent {
content=""
getContent(){
  console.log("The data od the console .log is",this.content);
}
}
