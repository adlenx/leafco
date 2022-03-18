import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanneraboutComponent } from './bannerabout.component';

describe('BanneraboutComponent', () => {
  let component: BanneraboutComponent;
  let fixture: ComponentFixture<BanneraboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanneraboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanneraboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
