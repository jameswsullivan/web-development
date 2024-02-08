import { Component } from '@angular/core';

@Component({
  selector: 'app-disk-capacity-calc',
  templateUrl: './disk-capacity-calc.component.html',
  styleUrls: ['./disk-capacity-calc.component.css']
})
export class DiskCapacityCalcComponent {

  inputUnit: string;
  outputUnit: string;
  inputValue: number;
  conversionSelect: string;
  resultValue: number;

  numOfDisks: number;
  singleDiskCapacity: number;
  raidUnitSelect: string;
  raidLevelSelect: string;
  raidCapacity: number;

  constructor() {
    this.inputUnit = "Unit Not Selected";
    this.outputUnit = "Unit Not Selected";
    this.inputValue = 0;
    this.conversionSelect = "";
    this.resultValue = 0;
  
    this.numOfDisks = 0;
    this.singleDiskCapacity = 0;
    this.raidUnitSelect = "";
    this.raidLevelSelect = "";
    this.raidCapacity = 0;
  }

  convertUnit() {
    switch(this.conversionSelect) {
      case "KBtoMB":
        this.resultValue = this.inputValue / 1024;
        break;
      case "MBtoKB":
        this.resultValue = this.inputValue * 1024;
        break;
      case "MBtoGB":
        this.resultValue = this.inputValue / 1024;
        break;
      case "GBtoMB":
        this.resultValue = this.inputValue * 1024;
        break;
      case "GBtoTB":
        this.resultValue = this.inputValue / 1024;
        break;
      case "TBtoGB":
        this.resultValue = this.inputValue * 1024;
        break;
      case "TBtoPB":
        this.resultValue = this.inputValue / 1024;
        break;
      case "PBtoTB":
        this.resultValue = this.inputValue * 1024;
        break;
      case "GBtoGiB":
        this.resultValue = this.inputValue / 1.074;
        break;
      case "GiBtoGB":
        this.resultValue = this.inputValue * 1.074;
        break;
      case "TBtoTiB":
        this.resultValue = this.inputValue / 1.0995;
        break;
      case "TiBtoTB":
        this.resultValue = this.inputValue * 1.0995;
        break;
      default:
        break;
    }
  }

  calculateRAID() {
    switch(this.raidLevelSelect) {
      case "RAID0":
        this.raidCapacity = this.numOfDisks * this.singleDiskCapacity;
        break;
      case "RAID1":
        this.raidCapacity = this.numOfDisks * this.singleDiskCapacity / 2;
        break;
      case "RAID10":
        this.raidCapacity = this.numOfDisks * this.singleDiskCapacity / 2;
        break;
      case "RAID5":
        this.raidCapacity = (this.numOfDisks - 1) * this.singleDiskCapacity;
        break;
      case "RAID6":
        this.raidCapacity = (this.numOfDisks - 2) * this.singleDiskCapacity;
        break;
      case "RAIDZStripe":
        this.raidCapacity = this.numOfDisks * this.singleDiskCapacity;
        break;
      case "RAIDZMirror":
        this.raidCapacity = this.numOfDisks * this.singleDiskCapacity / 2;
        break;
      case "RAIDZ":
        this.raidCapacity = (this.numOfDisks - 1) * this.singleDiskCapacity;
        break;
      case "RAIDZ2":
        this.raidCapacity = (this.numOfDisks - 2) * this.singleDiskCapacity;
        break;
      case "RAIDZ3":
        this.raidCapacity = (this.numOfDisks - 3) * this.singleDiskCapacity;
        break;
      default:
        this.raidCapacity = 0;
        break;
    }
  }

  updateSelectedUnitLabels() {
    switch(this.conversionSelect) {
      case "KBtoMB":
        this.inputUnit = "KB";
        this.outputUnit = "MB";
        this.convertUnit();
        break;
      case "MBtoKB":
        this.inputUnit = "MB";
        this.outputUnit = "KB";
        this.convertUnit();
        break;
      case "MBtoGB":
        this.inputUnit = "MB";
        this.outputUnit = "GB";
        this.convertUnit();
        break;
      case "GBtoMB":
        this.inputUnit = "GB";
        this.outputUnit = "MB";
        this.convertUnit();
        break;
      case "GBtoTB":
        this.inputUnit = "GB";
        this.outputUnit = "TB";
        this.convertUnit();
        break;
      case "TBtoGB":
        this.inputUnit = "TB";
        this.outputUnit = "GB";
        this.convertUnit();
        break;
      case "TBtoPB":
        this.inputUnit = "TB";
        this.outputUnit = "PB";
        this.convertUnit();
        break;
      case "PBtoTB":
        this.inputUnit = "PB";
        this.outputUnit = "TB";
        this.convertUnit();
        break;
      case "GBtoGiB":
        this.inputUnit = "GB";
        this.outputUnit = "GiB";
        this.convertUnit();
        break;
      case "GiBtoGB":
        this.inputUnit = "GiB";
        this.outputUnit = "GB";
        this.convertUnit();
        break;
      case "TBtoTiB":
        this.inputUnit = "TB";
        this.outputUnit = "TiB";
        this.convertUnit();
        break;
      case "TiBtoTB":
        this.inputUnit = "TiB";
        this.outputUnit = "TB";
        this.convertUnit();
        break;
      default:
        this.inputUnit = "Unit Not Selected";
        this.outputUnit = "Unit Not Selected";
        this.inputValue = 0;
        this.resultValue = 0;
        break;
    }
  }
}
