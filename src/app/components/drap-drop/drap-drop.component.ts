import { Component } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-drap-drop',
  standalone: true,
  imports: [DragDropModule,CommonModule],
  templateUrl: './drap-drop.component.html',
  styleUrl: './drap-drop.component.css'
})
export class DrapDropComponent {
  columns = [
    {
      name: 'To Do',
      tasks: ['Task 1', 'Task 2', 'Task 3']
    },
    {
      name: 'In Progress',
      tasks: ['Task 4', 'Task 5']
    },
    {
      name: 'Done',
      tasks: ['Task 6', 'Task 7']
    }
  ];

  getConnectedDropLists(): string[] {
    return this.columns.map((_, index) => `cdk-drop-list-${index}`);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
