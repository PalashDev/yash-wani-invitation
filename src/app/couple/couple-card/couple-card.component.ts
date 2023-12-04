import { Component, Input, OnInit } from '@angular/core';
import { person } from 'src/model/person.model';

@Component({
  selector: 'app-couple-card',
  templateUrl: './couple-card.component.html',
  styleUrls: ['./couple-card.component.scss']
})
export class CoupleCardComponent implements OnInit {

  readonly baseUrl = "../../../assets/img/clientImages/"
  @Input({ required: true }) person!: person;

  ngOnInit() {
   this.person.img = this.baseUrl + this.person.img;
  }

}

