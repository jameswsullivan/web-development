import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarPositionComponent } from './solar-position.component';

describe('SolarPositionComponent', () => {
  let component: SolarPositionComponent;
  let fixture: ComponentFixture<SolarPositionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolarPositionComponent]
    });
    fixture = TestBed.createComponent(SolarPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
