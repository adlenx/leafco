import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Allproduct3Component } from './allproduct3.component';

describe('Allproduct3Component', () => {
  let component: Allproduct3Component;
  let fixture: ComponentFixture<Allproduct3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Allproduct3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Allproduct3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
