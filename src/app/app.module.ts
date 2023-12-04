import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoupleComponent } from './couple/couple.component';
import { EventComponent } from './event/event.component';
import { LoveStoryComponent } from './love-story/love-story.component';
import { PhotosComponent } from './photos/photos.component';
import { HomeComponent } from './home/home.component';
import { CoupleCardComponent} from './couple/couple-card/couple-card.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoupleComponent,
    EventComponent,
    LoveStoryComponent,
    PhotosComponent,
    HomeComponent,
    CoupleCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
