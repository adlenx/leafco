import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannercollectionComponent } from './bannercollection.component';

describe('BannercollectionComponent', () => {
  let component: BannercollectionComponent;
  let fixture: ComponentFixture<BannercollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannercollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannercollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
