import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatoPhoneticAlphabetComponent } from './nato-phonetic-alphabet.component';

describe('NatoPhoneticAlphabetComponent', () => {
  let component: NatoPhoneticAlphabetComponent;
  let fixture: ComponentFixture<NatoPhoneticAlphabetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NatoPhoneticAlphabetComponent]
    });
    fixture = TestBed.createComponent(NatoPhoneticAlphabetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
