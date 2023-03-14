import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss'],
})
export class CommonHeaderComponent implements OnInit {

  userIsLogged:boolean = false;

  burgerMenuToggle: string = 'off';
  ScreenWidth:number


  constructor() {}

  ngOnInit() {
    this.onWindowResize();
  }
  
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.ScreenWidth = window.innerWidth;
    if (this.ScreenWidth < 769) {
      this.burgerMenuToggle = 'on';
    } else {
      this.burgerMenuToggle = 'off';
    }
  }
}
