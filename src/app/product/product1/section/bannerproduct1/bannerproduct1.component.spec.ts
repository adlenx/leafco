import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bannerproduct1Component } from './bannerproduct1.component';

describe('Bannerproduct1Component', () => {
  let component: Bannerproduct1Component;
  let fixture: ComponentFixture<Bannerproduct1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bannerproduct1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bannerproduct1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
