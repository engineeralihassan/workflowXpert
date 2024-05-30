import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigUpComponent } from './sig-up.component';

describe('SigUpComponent', () => {
  let component: SigUpComponent;
  let fixture: ComponentFixture<SigUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SigUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
