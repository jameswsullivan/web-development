import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreekAlphabetComponent } from './greek-alphabet.component';

describe('GreekAlphabetComponent', () => {
  let component: GreekAlphabetComponent;
  let fixture: ComponentFixture<GreekAlphabetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreekAlphabetComponent]
    });
    fixture = TestBed.createComponent(GreekAlphabetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
