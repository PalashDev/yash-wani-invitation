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
      Name : 'Halki si Haldi',
      Desc:`Get ready for a burst of color and love! Join us in celebrating the Haldi ceremony. As the golden hues of turmeric adorn the bride and groom, let's immerse this day in laughter, blessings, and joy. Your presence will add a touch of warmth to this auspicious and colorful prelude to their wedding day.`,
      date:  new Date('Feb 02, 2024 '),
      time: "3:00 PM onwards",
      place:"Balaji Residency",
      location:'Shahade , Maharashtra',
      howToReach :'',
      mapsLocation:'https://maps.app.goo.gl/Jmw1Pw3XKxDqZKZr8',
      iconUrl :'haldi.png',
      img:'haldi-img.avif'
    },
    {
      Name : 'Sangeet – Bling Binge',
      Desc:`The radiant celebration of love at the Mehndi Ceremony, as intricate henna patterns grace the hands and hearts of couples.
            An evening filled with vibrant colors, rhythmic beats, and joyous laughter awaits, symbolizing the beautiful journey ahead.`,
      date:  new Date('Feb 02, 2024 '),
      time: "7:30 PM onwards",
      place:"Balaji Residency ",
      location:'Shahade, Maharashtra',
      howToReach :'',
      mapsLocation:'https://maps.app.goo.gl/Jmw1Pw3XKxDqZKZr8',
      iconUrl :'mehndi.png',
      img:'sangeet-img.jpg'

    },
    
    {
      Name : 'Shagna di Shaam!',
      Desc:`Marriage, a beautiful journey where two souls intertwine, embarking on a path of love, companionship, and shared dreams. Shadi,
       a celebration of unity, where promises are exchanged, and a lifetime commitment is sealed.`,
      date:  new Date('Feb 04, 2024 '),
      time: "5:00 PM onwards",
      place:"Balaji Residency ",
      location:'Shahade , Maharashtra',
      howToReach :'',
      mapsLocation:'https://maps.app.goo.gl/Jmw1Pw3XKxDqZKZr8',
      iconUrl :'agni-pooja.png',
      img:'wedding-img.jpeg'


    },
    {
      Name : 'Reception',
      Desc:`Join us for an evening of love, laughter, and unforgettable moments. Your presence will add warmth to this reception, making it a cherished part of our joyous festivities. Looking forward to creating lasting memories together!`,
      date:  new Date('Feb 10, 2024 '),
      time: "7:00 PM onwards",
      place:"Deep Party Plot",
      location:'Padra Road, Atladara, Vadodara',
      howToReach :'',
      mapsLocation:'https://maps.app.goo.gl/mNTbLm5T9PS7VNjV6',
      iconUrl :'reception.png',
      img:'reception-img.jpg'


    },
  ]

  

}
