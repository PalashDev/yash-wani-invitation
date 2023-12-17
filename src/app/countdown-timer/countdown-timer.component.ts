import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  marraigeDate =  new Date(2024,2,4);
  weeks :number = 0;
  days:number = 0;
  hours:number= 0;
  minutes:number = 0;
  seconds:number = 0;
  countdownActive: any;
  dateString : string ='';
  ngOnDestroy(): void {
    clearInterval(this.countdownActive);
  }
  
  ngOnInit(): void {
    this.countdownActive = setInterval(() => {
      this.populateNumbers();
    }, 1000);
    this.setDateString();
 
  }

  populateNumbers() {
    let countdownValue = this.marraigeDate.getTime();

    const now = new Date().getTime();
    const distance = countdownValue - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    this.weeks = Math.floor(distance / week);
    this.days = Math.floor((distance % week) / day);
    this.hours = Math.floor((distance % day) / hour);
    this.minutes = Math.floor((distance % hour) / minute);
    this.seconds = Math.floor((distance % minute) / second);
  }

  
   setDateString() {
    // CHANGE DATE TO TEXT
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const newDate = new Date(this.marraigeDate);
    const weekday = newDate.getDay();
    const dateValue = newDate.getDate();
    const monthValue = newDate.getMonth();
    const yearValue = newDate.getFullYear();

    // 1st 2nd and 3rd OF MONTH
    const toString = dateValue.toString();
    const lastChar = toString.slice(-1);
    const lastDigit = +(lastChar);

    let suffix;
    if (lastDigit === 1) {
        suffix = "st";
    } else if (lastDigit === 2) {
        suffix = "nd";
    } else if (lastDigit === 3) {
        suffix = "rd";
    }
    else {
        suffix = "th";
    }

    this.dateString = `${weekdays[weekday]} ${dateValue}${suffix} ${months[monthValue]} ${yearValue}`;
  }
  
}
