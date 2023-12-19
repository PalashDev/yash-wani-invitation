import { Component } from '@angular/core';
import{Event} from '../../model/Event.model'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
 
  events: Event[] = [
    {
      Name : 'Haldi',
      Desc:`Get ready for a burst of color and love! Join us in celebrating the Haldi ceremony. As the golden hues of turmeric adorn the bride and groom, let's immerse this day in laughter, blessings, and joy. Your presence will add a touch of warmth to this auspicious and colorful prelude to their wedding day.`,
      date:  new Date('Feb 02, 2024 '),
      time: "3:00 PM onwards",
      place:"Balaji Residency",
      location:'shahade , Maharashtra',
      howToReach :'',
      mapsLocation:'https://maps.app.goo.gl/Jmw1Pw3XKxDqZKZr8',
      iconUrl :'haldi.png',
      img:'haldi-img.avif'
    },
    {
      Name : 'Sangeet',
      Desc:`The radiant celebration of love at the Mehndi Ceremony, as intricate henna patterns grace the hands and hearts of couples.
            An evening filled with vibrant colors, rhythmic beats, and joyous laughter awaits, symbolizing the beautiful journey ahead.`,
      date:  new Date('Feb 02, 2024 '),
      time: "8:00 PM onwards",
      place:"Balaji Residency ",
      location:'shahade, Maharashtra',
      howToReach :'',
      mapsLocation:'https://maps.app.goo.gl/Jmw1Pw3XKxDqZKZr8',
      iconUrl :'mehndi.png',
      img:'sangeet-img.jpg'

    },
    
    {
      Name : 'Shadi',
      Desc:`Marriage, a beautiful journey where two souls intertwine, embarking on a path of love, companionship, and shared dreams. Shadi,
       a celebration of unity, where promises are exchanged, and a lifetime commitment is sealed.`,
      date:  new Date('Feb 03, 2024 '),
      time: "5:00 PM onwards",
      place:"Balaji Residency ",
      location:'shahade , Maharashtra',
      howToReach :'',
      mapsLocation:'https://maps.app.goo.gl/Jmw1Pw3XKxDqZKZr8',
      iconUrl :'agni-pooja.png',
      img:'wedding-img.jpg'


    },
    {
      Name : 'Reception',
      Desc:`Join us for an evening of love, laughter, and unforgettable moments. Your presence will add warmth to this reception, making it a cherished part of our joyous festivities. Looking forward to creating lasting memories together!`,
      date:  new Date('Feb 10, 2024 '),
      time: "5:00 PM onwards",
      place:"River side Resort",
      location:'Baroda, Gujarat',
      howToReach :'',
      mapsLocation:'',
      iconUrl :'reception.png',
      img:'reception-img.jpg'


    },
  ]

  

}
