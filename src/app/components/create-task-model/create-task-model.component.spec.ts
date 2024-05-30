import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaskModelComponent } from './create-task-model.component';

describe('CreateTaskModelComponent', () => {
  let component: CreateTaskModelComponent;
  let fixture: ComponentFixture<CreateTaskModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTaskModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTaskModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
