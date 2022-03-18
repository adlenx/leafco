import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijabpeopleComponent } from './hijabpeople.component';

describe('HijabpeopleComponent', () => {
  let component: HijabpeopleComponent;
  let fixture: ComponentFixture<HijabpeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijabpeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijabpeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
