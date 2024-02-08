import { Component } from '@angular/core';

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.css']
})
export class SalaryCalculatorComponent {

  inputLabel: string;
  inputData: string;
  hourlyData: string;
  monthlyData: string;
  yearlyData: string;
  conversionSelect: string;

  constructor() {
    this.inputLabel = "No Option Selected";
    this.inputData = "0";
    this.hourlyData = "0";
    this.monthlyData = "0";
    this.yearlyData = "0";
    this.conversionSelect = "";
  }

  convertUnit() {
    switch(this.conversionSelect) {
      case "hourlyToMonthly":
        this.monthlyData = Number((Number(this.inputData) * 40 * 52 / 12).toFixed(2)).toLocaleString('en', {
          minimumFractionDigits: 2
        });
        this.yearlyData = Number((Number(this.inputData) * 40 * 52).toFixed(2)).toLocaleString('en', {
          minimumFractionDigits: 2
        });
        break;
      case "monthlyToHourly":
        this.hourlyData = Number((Number(this.inputData) * 12 / 52 / 40).toFixed(2)).toLocaleString('en', {
          minimumFractionDigits: 2
        });
        this.yearlyData = Number((Number(this.inputData) * 12).toFixed(2)).toLocaleString('en', {
          minimumFractionDigits: 2
        });
        break;
    }
  }

  updateInputLabel() {
    switch(this.conversionSelect) {
      case "hourlyToMonthly":
        this.inputLabel = "Hourly Rate";
        this.hourlyData = Number(Number(this.inputData).toFixed(2)).toLocaleString('en', {
          minimumFractionDigits: 2
        });
        break;
      case "monthlyToHourly":
        this.inputLabel = "Monthly Rate";
        this.monthlyData = Number(Number(this.inputData).toFixed(2)).toLocaleString('en', {
          minimumFractionDigits: 2
        });
        break;
    }
  }
}
