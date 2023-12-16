import { Component } from '@angular/core';
import { story } from 'src/model/story.,model';

@Component({
  selector: 'app-love-story',
  templateUrl: './love-story.component.html',
  styleUrls: ['./love-story.component.scss']
})
export class LoveStoryComponent {

  stories : story[] =[
    {
      title: 'First Meet Each Other',
      p : [
        `Milea and Dilan met the modern way: by swiping right on Tinder in
        2021. Their first date was a bit of a disaster-it started pouring
        while they were enjoying their outdoor dinner, Dilan fell into a
        mud puddle, and they had to wait over an hour for a subway train.
        However, their second date went much better and they've been
        together ever since.`,
        ` There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form, by
        injected humour, or randomised words which don't look even
        slightly believable.`
      ],
      imageSrc : 'gallery-1.jpeg'
    },
    {
      title: 'When We Go Out Together',
      p : [
        `Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a gall`,
        ` There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form, by
        injected humour, or randomised words which don't look even
        slightly believable.`
      ],
      imageSrc : 'gallery-2.jpeg'
    },
    {
      title: 'Have a Lovely Time',
      p : [
        `Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a gall`,
        ` There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form, by
        injected humour, or randomised words which don't look even
        slightly believable.`
      ],
      imageSrc : 'gallery-3.jpeg'
    },
    {
      title: 'We Fall in Love Each Other',
      p : [
        `Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a gall`,
        ` There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form, by
        injected humour, or randomised words which don't look even
        slightly believable.`
      ],
      imageSrc : 'gallery-4.jpeg'
    },
    {
      title: 'We Decide to Live Together',
      p : [
        `Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a gall`,
        ` There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form, by
        injected humour, or randomised words which don't look even
        slightly believable.`
      ],
      imageSrc : 'gallery-5.jpeg'
    }
  ]
}
