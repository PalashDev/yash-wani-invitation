import { Component } from '@angular/core';
import { person } from 'src/model/person.model';

@Component({
  selector: 'app-couple',
  templateUrl: './couple.component.html',
  styleUrls: ['./couple.component.scss']
})
export class CoupleComponent {

  groom:person =  {
    name:"Yash",
    desc:"“Her simplicity, elegance & strong value system inspires me. Looking forward to a lifetime of love, adventure, and shared laughter with this remarkable women!”",
    gender:"Groom",
    img:"groom-hero.jpg"
  }

  bride:person =  {
    name:"Kartiki",
    desc:"“We share a strong bond rooted in mutual respect & shared dreams. Eager to embark on this new chapter, knowing that with him, every day will be an adventure filled with love, companionship, and the strength of a friendship that continues to grow.”",
    gender:"Bride",
    img:"bride-hero.jpg"
  }
}
