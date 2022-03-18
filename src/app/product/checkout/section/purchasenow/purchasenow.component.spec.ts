import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasenowComponent } from './purchasenow.component';

describe('PurchasenowComponent', () => {
  let component: PurchasenowComponent;
  let fixture: ComponentFixture<PurchasenowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasenowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasenowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
