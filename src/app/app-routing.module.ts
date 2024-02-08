import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolarPositionComponent } from './solar-position/solar-position.component';
import { RandGeneratorComponent } from './rand-generator/rand-generator.component';
import { DiskCapacityCalcComponent } from './disk-capacity-calc/disk-capacity-calc.component';
import { GreekAlphabetComponent } from './greek-alphabet/greek-alphabet.component';
import { NatoPhoneticAlphabetComponent } from './nato-phonetic-alphabet/nato-phonetic-alphabet.component';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'solar-position', component: SolarPositionComponent },
  { path: 'rand-generator', component: RandGeneratorComponent },
  { path: 'disk-capacity-calc', component: DiskCapacityCalcComponent },
  { path: 'greek-alphabet', component: GreekAlphabetComponent },
  { path: 'nato-phonetic-alphabet', component: NatoPhoneticAlphabetComponent },
  { path: 'salary-calculator', component: SalaryCalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
