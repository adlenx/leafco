import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bannerproduct4Component } from './bannerproduct4.component';

describe('Bannerproduct4Component', () => {
  let component: Bannerproduct4Component;
  let fixture: ComponentFixture<Bannerproduct4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bannerproduct4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bannerproduct4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
