import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskMetaComponent } from './task-meta.component';

describe('TaskMetaComponent', () => {
  let component: TaskMetaComponent;
  let fixture: ComponentFixture<TaskMetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskMetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
