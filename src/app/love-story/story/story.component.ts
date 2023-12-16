import { Component, Input } from '@angular/core';
import { story } from 'src/model/story.,model';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent {

  @Input({ required: true }) story!: story;
  
}
