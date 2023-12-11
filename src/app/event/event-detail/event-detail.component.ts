import { Component, Input } from '@angular/core';
import { Event } from 'src/model/Event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent {

  @Input({ required: true }) Event!: Event;
}
