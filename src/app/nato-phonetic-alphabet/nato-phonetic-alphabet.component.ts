import { Component } from '@angular/core';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Letters {
  character: string;
  morseCode: string;
  telephony: string;
}


@Component({
  selector: 'app-nato-phonetic-alphabet',
  templateUrl: './nato-phonetic-alphabet.component.html',
  styleUrls: ['./nato-phonetic-alphabet.component.css'],
  standalone: true,
  imports: [FormsModule, ClipboardModule, CommonModule]
})
export class NatoPhoneticAlphabetComponent {
  
  letters: Letters[];
  
  constructor() {
    this.letters = [
      {
        character: "A",
        morseCode: "\u2022 \u2015",
        telephony: "Alfa"
      },
      {
        character: "B",
        morseCode: "\u2015 \u2022 \u2022 \u2022",
        telephony: "Bravo"
      },
      {
        character: "C",
        morseCode: "\u2015 \u2022 \u2015 \u2022",
        telephony: "Charlie"
      },
      {
        character: "D",
        morseCode: "\u2015 \u2022 \u2022",
        telephony: "Delta"
      },
      {
        character: "E",
        morseCode: "\u2022",
        telephony: "Echo"
      },
      {
        character: "F",
        morseCode: "\u2022 \u2022 \u2015 \u2022",
        telephony: "Foxtrot"
      },
      {
        character: "G",
        morseCode: "\u2015 \u2015 \u2022",
        telephony: "Golf"
      },
      {
        character: "H",
        morseCode: "\u2022 \u2022 \u2022 \u2022",
        telephony: "Hotel"
      },
      {
        character: "I",
        morseCode: "\u2022 \u2022",
        telephony: "India"
      },
      {
        character: "J",
        morseCode: "\u2022 \u2015 \u2015 \u2015",
        telephony: "Juliett"
      },
      {
        character: "K",
        morseCode: "\u2015 \u2022 \u2015",
        telephony: "Kilo"
      },
      {
        character: "L",
        morseCode: "\u2022 \u2015 \u2022 \u2022",
        telephony: "Lima"
      },
      {
        character: "M",
        morseCode: "\u2015 \u2015",
        telephony: "Mike"
      },
      {
        character: "N",
        morseCode: "\u2015 \u2022",
        telephony: "November"
      },
      {
        character: "O",
        morseCode: "\u2015 \u2015 \u2015",
        telephony: "Oscar"
      },
      {
        character: "P",
        morseCode: "\u2022 \u2015 \u2015 \u2022",
        telephony: "Papa"
      },
      {
        character: "Q",
        morseCode: "\u2015 \u2015 \u2022 \u2015",
        telephony: "Quebec"
      },
      {
        character: "R",
        morseCode: "\u2022 \u2015 \u2022",
        telephony: "Romeo"
      },
      {
        character: "S",
        morseCode: "\u2022 \u2022 \u2022",
        telephony: "Sierra"
      },
      {
        character: "T",
        morseCode: "\u2015",
        telephony: "Tango"
      },
      {
        character: "U",
        morseCode: "\u2022 \u2022 \u2015",
        telephony: "Uniform"
      },
      {
        character: "V",
        morseCode: "\u2022 \u2022 \u2022 \u2015",
        telephony: "Victor"
      },
      {
        character: "W",
        morseCode: "\u2022 \u2015 \u2015",
        telephony: "Whiskey"
      },
      {
        character: "X",
        morseCode: "\u2015 \u2022 \u2022 \u2015",
        telephony: "X-ray"
      },
      {
        character: "Y",
        morseCode: "\u2015 \u2022 \u2015 \u2015",
        telephony: "Yankee"
      },
      {
        character: "Z",
        morseCode: "\u2015 \u2015 \u2022 \u2022",
        telephony: "Zulu"
      }
    ];
    
  }
}
