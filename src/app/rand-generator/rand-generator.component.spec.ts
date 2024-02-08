import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandGeneratorComponent } from './rand-generator.component';

describe('RandGeneratorComponent', () => {
  let component: RandGeneratorComponent;
  let fixture: ComponentFixture<RandGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandGeneratorComponent]
    });
    fixture = TestBed.createComponent(RandGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
