import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrapDropComponent } from './drap-drop.component';

describe('DrapDropComponent', () => {
  let component: DrapDropComponent;
  let fixture: ComponentFixture<DrapDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrapDropComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrapDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
