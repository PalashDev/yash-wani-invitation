import { Component } from '@angular/core';
import { person } from 'src/model/person.model';

@Component({
  selector: 'app-couple',
  templateUrl: './couple.component.html',
  styleUrls: ['./couple.component.scss']
})
export class CoupleComponent {

  groom:person =  {
    name:"Yash Wani",
    desc:"kartiki means so much to me and I can't believe she is actually going to marry me. I'm so excited to spend the rest of my life with her. Kartiki is perfect for me.",
    gender:"Groom",
    img:"groom-hero.jpg"
  }

  bride:person =  {
    name:"Kariki",
    desc:"I am just crazy about Dilan. He has a truly amazing heart. I am so incredibly blessed and excited to spend everyday for the rest of my life with my best friend.",
    gender:"Bride",
    img:"bride-hero.jpg"
  }
}
