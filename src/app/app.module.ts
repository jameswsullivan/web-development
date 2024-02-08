import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolarPositionComponent } from './solar-position/solar-position.component';
import { RandGeneratorComponent } from './rand-generator/rand-generator.component';
import { DiskCapacityCalcComponent } from './disk-capacity-calc/disk-capacity-calc.component';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    SolarPositionComponent,
    DiskCapacityCalcComponent,
    SalaryCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RandGeneratorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
