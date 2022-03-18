import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeleafersreviewComponent } from './beleafersreview.component';

describe('BeleafersreviewComponent', () => {
  let component: BeleafersreviewComponent;
  let fixture: ComponentFixture<BeleafersreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeleafersreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeleafersreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
