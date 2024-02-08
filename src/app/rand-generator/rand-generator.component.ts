import { Component } from '@angular/core';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-rand-generator',
  templateUrl: './rand-generator.component.html',
  styleUrls: ['./rand-generator.component.css'],
  standalone: true,
  imports: [FormsModule, ClipboardModule]
})

export class RandGeneratorComponent {
  length: number;
  allowNumbers: boolean;
  allowSpecialChar: boolean;
  randString: string;

  allLetters: string;
  specialChars: string;
  numbers: string

  constructor() {
    this.length = 8;
    this.allowNumbers = false;
    this.allowSpecialChar = false;
    this.randString = "";

    this.allLetters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    this.specialChars = "!@#$%^&*()_+-={}[]`?<>";
    this.numbers = "0123456789";
  }

  generateNew() {
    function generateString(stringLength: number, allChars: string): string {
      let tempString = "";
      for (let i = 0; i < stringLength; i++ ) {
        tempString += allChars.charAt(Math.floor(Math.random() * allChars.length));
      }
      return tempString;
    }

    if (this.length < 8 || this.length > 25){
      console.log("Input length out of bound: ", this.length, window.alert("Input must be between 8 and 25."));
      this.length = 8;
    } else {
      if (this.allowNumbers && this.allowSpecialChar){
        let allChars = this.allLetters + this.specialChars + this.numbers;
        this.randString = generateString(this.length, allChars);
      }
      if (this.allowNumbers && !this.allowSpecialChar){
        let allChars = this.allLetters + this.numbers;
        this.randString = generateString(this.length, allChars);
      }
      if (this.allowSpecialChar && !this.allowNumbers){
        let allChars = this.allLetters + this.specialChars;
        this.randString = generateString(this.length, allChars);
      }
      if (!this.allowNumbers && !this.allowSpecialChar){
        this.randString = generateString(this.length, this.allLetters);
      }
    }
  }

  convertUpper() {
    this.randString = this.randString.toUpperCase();
  }

  convertLower() {
    this.randString = this.randString.toLowerCase();
  }

  reset() {
    this.length = 8;
    this.randString = "";
  }

}
