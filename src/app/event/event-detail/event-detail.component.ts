import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Event } from 'src/model/Event.model';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent {

  @Input({ required: true }) Event!: Event;

  constructor(private modalService: NgbModal) {}

  onClickhow(){
    console.log('fdsfs')
    const modalRef = this.modalService.open(DialogContentComponent, { size: 'xl' });
    
  }
}
