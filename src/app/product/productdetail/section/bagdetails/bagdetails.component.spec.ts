import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagdetailsComponent } from './bagdetails.component';

describe('BagdetailsComponent', () => {
  let component: BagdetailsComponent;
  let fixture: ComponentFixture<BagdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BagdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
