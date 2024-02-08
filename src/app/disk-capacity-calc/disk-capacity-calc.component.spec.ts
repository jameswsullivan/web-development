import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiskCapacityCalcComponent } from './disk-capacity-calc.component';

describe('DiskCapacityCalcComponent', () => {
  let component: DiskCapacityCalcComponent;
  let fixture: ComponentFixture<DiskCapacityCalcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiskCapacityCalcComponent]
    });
    fixture = TestBed.createComponent(DiskCapacityCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
