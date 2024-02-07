import { Component } from '@angular/core';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Letter {
  uppercaseLetter: string;
  lowercaseLetter: string;
  letterNameCap: string;
  letterNameLower: string;
}

@Component({
  selector: 'app-greek-alphabet',
  templateUrl: './greek-alphabet.component.html',
  styleUrls: ['./greek-alphabet.component.css'],
  standalone: true,
  imports: [FormsModule, ClipboardModule, CommonModule]
})

export class GreekAlphabetComponent {

  letters: Letter[];

  constructor() {
    this.letters = [
      {
        uppercaseLetter: 'Α',
        lowercaseLetter: 'α',
        letterNameCap: 'Alpha',
        letterNameLower: 'alpha'
      },
      {
        uppercaseLetter: 'Β',
        lowercaseLetter: 'β',
        letterNameCap: 'Beta',
        letterNameLower: 'beta'
      },
      {
        uppercaseLetter: 'Γ',
        lowercaseLetter: 'γ',
        letterNameCap: 'Gamma',
        letterNameLower: 'gamma'
      },
      {
        uppercaseLetter: 'Δ',
        lowercaseLetter: 'δ',
        letterNameCap: 'Delta',
        letterNameLower: 'delta'
      },
      {
        uppercaseLetter: 'Ε',
        lowercaseLetter: 'ε',
        letterNameCap: 'Epsilon',
        letterNameLower: 'epsilon'
      },
      {
        uppercaseLetter: 'Ζ',
        lowercaseLetter: 'ζ',
        letterNameCap: 'Zeta',
        letterNameLower: 'zeta'
      },
      {
        uppercaseLetter: 'Η',
        lowercaseLetter: 'η',
        letterNameCap: 'Eta',
        letterNameLower: 'eta'
      },
      {
        uppercaseLetter: 'Θ',
        lowercaseLetter: 'θ',
        letterNameCap: 'Theta',
        letterNameLower: 'theta'
      },
      {
        uppercaseLetter: 'Ι',
        lowercaseLetter: 'ι',
        letterNameCap: 'Iota',
        letterNameLower: 'iota'
      },
      {
        uppercaseLetter: 'Κ',
        lowercaseLetter: 'κ',
        letterNameCap: 'Kappa',
        letterNameLower: 'kappa'
      },
      {
        uppercaseLetter: 'Λ',
        lowercaseLetter: 'λ',
        letterNameCap: 'Lambda',
        letterNameLower: 'lambda'
      },
      {
        uppercaseLetter: 'Μ',
        lowercaseLetter: 'μ',
        letterNameCap: 'Mu',
        letterNameLower: 'mu'
      },
      {
        uppercaseLetter: 'Ν',
        lowercaseLetter: 'ν',
        letterNameCap: 'Nu',
        letterNameLower: 'nu'
      },
      {
        uppercaseLetter: 'Ξ',
        lowercaseLetter: 'ξ',
        letterNameCap: 'Xi',
        letterNameLower: 'xi'
      },
      {
        uppercaseLetter: 'Ο',
        lowercaseLetter: 'ο',
        letterNameCap: 'Omicron',
        letterNameLower: 'omicron'
      },
      {
        uppercaseLetter: 'Π',
        lowercaseLetter: 'π',
        letterNameCap: 'Pi',
        letterNameLower: 'pi'
      },
      {
        uppercaseLetter: 'Ρ',
        lowercaseLetter: 'ρ',
        letterNameCap: 'Rho',
        letterNameLower: 'rho'
      },
      {
        uppercaseLetter: 'Σ',
        lowercaseLetter: 'σ',
        letterNameCap: 'Sigma',
        letterNameLower: 'sigma'
      },
      {
        uppercaseLetter: 'Τ',
        lowercaseLetter: 'τ',
        letterNameCap: 'Tau',
        letterNameLower: 'tau'
      },
      {
        uppercaseLetter: 'Υ',
        lowercaseLetter: 'υ',
        letterNameCap: 'Upsilon',
        letterNameLower: 'upsilon'
      },
      {
        uppercaseLetter: 'Φ',
        lowercaseLetter: 'φ',
        letterNameCap: 'Phi',
        letterNameLower: 'phi'
      },
      {
        uppercaseLetter: 'Χ',
        lowercaseLetter: 'χ',
        letterNameCap: 'Chi',
        letterNameLower: 'chi'
      },
      {
        uppercaseLetter: 'Ψ',
        lowercaseLetter: 'ψ',
        letterNameCap: 'Psi',
        letterNameLower: 'psi'
      },
      {
        uppercaseLetter: 'Ω',
        lowercaseLetter: 'ω',
        letterNameCap: 'Omega',
        letterNameLower: 'omega'
      }
    ];
  }
}