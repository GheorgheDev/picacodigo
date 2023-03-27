import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.scss']
})
export class HeaderContentComponent implements OnInit {

  userIsLogged:boolean = false;

  logOutToggle: string = 'off';
  ScreenWidth: number;


  constructor() {}

  ngOnInit() {
    this.onWindowResize();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.ScreenWidth = window.innerWidth;
    if (this.ScreenWidth < 769 && this.userIsLogged) {
      this.logOutToggle = 'on';
    } else {
      this.logOutToggle = 'off';
    }
  }

}
