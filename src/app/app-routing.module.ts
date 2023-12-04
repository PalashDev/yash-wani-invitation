import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoupleComponent } from './couple/couple.component';
import { EventComponent } from './event/event.component';
import { LoveStoryComponent } from './love-story/love-story.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'the-couple', component: CoupleComponent},
  {path: 'events', component: EventComponent},
  {path: 'love-story', component: LoveStoryComponent},
  {path: 'photos', component: PhotosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
