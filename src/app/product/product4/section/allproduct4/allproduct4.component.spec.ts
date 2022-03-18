import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Allproduct4Component } from './allproduct4.component';

describe('Allproduct4Component', () => {
  let component: Allproduct4Component;
  let fixture: ComponentFixture<Allproduct4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Allproduct4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Allproduct4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
