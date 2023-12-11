import { Component, OnInit } from '@angular/core';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  hearts: Heart[] = [];
  
  title = 'yash-wani-invitation';
  faHeart = faHeart;

  ngOnInit(): void {
    setInterval(() => this.createHeart(), 100);
    setInterval(() => this.removeExcessHearts(), 100);
  }

  createHeart() {
    const newHeart: Heart = {
      left: this.setLeftValue(),
      animationDuration: `${Math.random() * 3 + 2}s`,
    };

    this.hearts.push(newHeart);

    if (this.hearts.length > 200) {
      this.hearts.shift();
    }
  }

  removeExcessHearts() {
    if (this.hearts.length > 200) {
      this.hearts.shift();
    }
  }
  setLeftValue()
  {
    let left = Math.random() * 100
    if(left> 90)
    { 
      left = left - 10;
    }
    
    return left +'vw';
    
   }
}

interface Heart {
  left: string;
  animationDuration: string;
}