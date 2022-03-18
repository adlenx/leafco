import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bannerproduct2Component } from './bannerproduct2.component';

describe('Bannerproduct2Component', () => {
  let component: Bannerproduct2Component;
  let fixture: ComponentFixture<Bannerproduct2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bannerproduct2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bannerproduct2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
