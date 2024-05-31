import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeltonLoaderComponent } from './skelton-loader.component';

describe('SkeltonLoaderComponent', () => {
  let component: SkeltonLoaderComponent;
  let fixture: ComponentFixture<SkeltonLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeltonLoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkeltonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
