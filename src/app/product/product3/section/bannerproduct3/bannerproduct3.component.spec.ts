import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bannerproduct3Component } from './bannerproduct3.component';

describe('Bannerproduct3Component', () => {
  let component: Bannerproduct3Component;
  let fixture: ComponentFixture<Bannerproduct3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bannerproduct3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bannerproduct3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
