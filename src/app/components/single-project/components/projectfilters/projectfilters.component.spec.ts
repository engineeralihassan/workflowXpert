import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectfiltersComponent } from './projectfilters.component';

describe('ProjectfiltersComponent', () => {
  let component: ProjectfiltersComponent;
  let fixture: ComponentFixture<ProjectfiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectfiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectfiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
