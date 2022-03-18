import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeleafComponent } from './beleaf.component';

describe('BeleafComponent', () => {
  let component: BeleafComponent;
  let fixture: ComponentFixture<BeleafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeleafComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeleafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
