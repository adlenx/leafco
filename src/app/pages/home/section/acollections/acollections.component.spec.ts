import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcollectionsComponent } from './acollections.component';

describe('AcollectionsComponent', () => {
  let component: AcollectionsComponent;
  let fixture: ComponentFixture<AcollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcollectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
