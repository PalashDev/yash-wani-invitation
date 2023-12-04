import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  
  @ViewChild('navbar', { static: false }) navbar!: ElementRef;

  constructor(private rendrer: Renderer2 ){
    
  }


  ngOnInit(): void {

  }

  onNavClick(): void {
    console.log(this.navbar);
    this.rendrer.removeClass( this.navbar.nativeElement,'show' )
  }
}
