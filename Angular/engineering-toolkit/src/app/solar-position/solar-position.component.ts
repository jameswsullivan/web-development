import { Component } from '@angular/core';

@Component({
  selector: 'app-solar-position',
  templateUrl: './solar-position.component.html',
  styleUrls: ['./solar-position.component.css']
})

export class SolarPositionComponent {

  location: string;
  latitude: number;
  longitude: number;
  timezone: number;
  datetime: string;

  oneDay: number;
  toRadian: number;
  toDegree: number;

  localtime: Date;
  utcTime: number;
  utcYear: number;
  utcMonth: number;
  calendarMonth: number;
  utcDate: number;
  utcHour: number;
  utcMinute: number;
  utcSecond: number;
  utcDayOfYear: number;

  LT: number;
  LSTM: number;
  LST: number;
  EoT: number;
  EoT_B: number;
  TC: number;

  // sin(θs)=cos(h)cos(δ)cos(Φ) + sin(δ)sin(Φ)
  declination: number;
  hourAngle: number;

  elevation: number;
  azimuth: number;

  constructor() {

    this.location = "Houston, TX";
    this.latitude = 29.7604;
    this.longitude = -95.3698;
    this.timezone = 0;
    this.datetime = "";

    this.oneDay = 86400000;
    this.toRadian = Math.PI / 180;
    this.toDegree = 180 / Math.PI;

    this.localtime = new Date();
    this.utcTime = 0;

    this.utcYear = 0;
    this.utcMonth = 0;
    this.calendarMonth = 0;
    this.utcDate = 0;
    this.utcHour = 0;
    this.utcMinute = 0;
    this.utcSecond = 0;
    this.utcDayOfYear = 0;

    this.LT = 0;
    this.LSTM = 0;
    this.LST = 0;
    this.EoT = 0;
    this.EoT_B = 0;
    this.TC = 0;

    this.declination = 0;
    this.hourAngle = 0;

    this.elevation = 0;
    this.azimuth = 0;
   }

  parseDate() {
    this.localtime = new Date(this.datetime);
    this.utcYear = this.localtime.getUTCFullYear();
    this.utcMonth = this.localtime.getUTCMonth();
    this.calendarMonth = this.utcMonth + 1;
    this.utcDate = this.localtime.getUTCDate();
    this.utcHour = this.localtime.getUTCHours();
    this.utcMinute = this.localtime.getUTCMinutes();
    this.utcSecond = this.localtime.getUTCSeconds();
    
    this.utcTime = Date.UTC(this.utcYear, this.utcMonth, this.utcDate, this.utcHour, this.utcMinute, this.utcSecond);
   }

   getDayOfYear() {
    let startOfYear = new Date(this.utcYear, 0, 0);
    let diff = this.utcTime - startOfYear.getTime();
    this.utcDayOfYear = Math.floor(diff/this.oneDay);
   }


   getDeclination() {
    let arg1: number = (-23.44) * this.toRadian;
    let arg2: number = Math.sin(arg1);
    let arg3: number = 360 / 365;
    let arg4: number = Math.cos(arg3 * (this.utcDayOfYear + 10) * this.toRadian);
    let sinDeclination = arg2 * arg4;
    this.declination = Math.asin(sinDeclination) * this.toDegree;
   }

   getHourAngle() {
    // Calculate LSTM - Local Standard Time Meridian. (in degrees)
    this.LSTM = 15 * this.timezone;
    console.log("LSTM",this.LSTM);

    // Calculate EoT - Equation of Time. (in minutes)
    this.EoT_B = 360 / 365 * (this.utcDayOfYear - 81) * this.toRadian;
    this.EoT = 9.87 * Math.sin(2 * this.EoT_B) - 7.53 * Math.cos(this.EoT_B) - 1.5 * Math.sin(this.EoT_B);
    console.log("EoT", this.EoT_B, this.EoT);

    //Calculate TC - Time Correction Factor (in minutes)
    this.TC = 4 * (this.longitude - this.LSTM) + this.EoT;
    console.log("TC", this.TC);

    //Calculate LST - Local Solar Time (in hours)
    let localtimeToHours = this.localtime.getHours() + this.localtime.getMinutes() / 60;
    this.LST = this.TC / 60 + localtimeToHours;
    console.log("Local Time: ", localtimeToHours, this.LST);

    //Calculate Hour Angle
    this.hourAngle = 15 * (this.LST - 12);
    console.log("Hour Angel: ", this.hourAngle);
   }

   getAltitudeAngle() {
    let phi = this.latitude * this.toRadian;
    let h = this.hourAngle * this.toRadian;
    let delta = this.declination * this.toRadian;

    // alpha = elevation angle.
    let sinAlpha = Math.sin(phi)*Math.sin(delta) + Math.cos(phi)*Math.cos(delta)*Math.cos(h);
    this.elevation = Math.asin(sinAlpha) * this.toDegree;
   }

   getAzimuthAngle() {
    let delta = this.declination * this.toRadian;
    let phi = this.latitude * this.toRadian;
    let h = this.hourAngle * this.toRadian;
    let alpha = this.elevation * this.toRadian;
    let cosAlpha = (Math.sin(delta)*Math.cos(phi) - Math.cos(delta)*Math.sin(phi)*Math.cos(h))/Math.cos(alpha);
    this.azimuth = h >= 0 ? 360 - Math.acos(cosAlpha) * this.toDegree : Math.acos(cosAlpha) * this.toDegree;
  }
  
  setTimeToNow() {
    this.location = "Houston, TX";
    this.latitude = 29.7604;
    this.longitude = -95.3698;

    let currentDate = new Date();
    this.timezone = -Math.floor(currentDate.getTimezoneOffset() / 60);
    // this.datetime = currentDate.toISOString().substring(0, 16).replace('T', ' ');

    currentDate.setHours(currentDate.getHours() + this.timezone);
    this.datetime = currentDate.toISOString().substring(0, 16);

    console.log(this.datetime, "\n", Date(), "\n", Date().toString(), "\n", this.timezone);
  }

  calculate() {
    this.parseDate();
    this.getDayOfYear();
    this.getDeclination();
    this.getHourAngle();
    this.getAltitudeAngle();
    this.getAzimuthAngle();
  }

  reset() {
    
    this.location = "";
    this.latitude = 0;
    this.longitude = 0;
    this.timezone = 0;
    this.datetime = "";

    this.localtime = new Date();
    this.utcTime = 0;

    this.utcYear = 0;
    this.utcMonth = 0;
    this.calendarMonth = 0;
    this.utcDate = 0;
    this.utcHour = 0;
    this.utcMinute = 0;
    this.utcSecond = 0;
    this.utcDayOfYear = 0;

    this.LT = 0;
    this.LSTM = 0;
    this.LST = 0;
    this.EoT = 0;
    this.EoT_B = 0;
    this.TC = 0;

    this.declination = 0;
    this.hourAngle = 0;

    this.elevation = 0;
    this.azimuth = 0;
  }
}