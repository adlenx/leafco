import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Allproduct1Component } from './allproduct1.component';

describe('Allproduct1Component', () => {
  let component: Allproduct1Component;
  let fixture: ComponentFixture<Allproduct1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Allproduct1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Allproduct1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
