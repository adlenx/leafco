import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcollectioninComponent } from './acollectionin.component';

describe('AcollectioninComponent', () => {
  let component: AcollectioninComponent;
  let fixture: ComponentFixture<AcollectioninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcollectioninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcollectioninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
