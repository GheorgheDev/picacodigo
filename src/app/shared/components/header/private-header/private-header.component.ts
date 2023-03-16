import { Component, OnInit, HostListener } from '@angular/core';
import { UserData } from 'src/app/shared/models/user-data';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss'],
})
export class PrivateHeaderComponent implements OnInit {
  profileButtonToggle: string = 'on';
  ScreenWidth: number;

  user: UserData[] = [
    {
      userID: 1,
      userUsername: 'AndreaC',
      name: 'Andrea Cebrian',
      img: 'assets/media/example-photo.jpg',
    },
  ];

  constructor() {}

  ngOnInit() {
    this.onWindowResize();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.ScreenWidth = window.innerWidth;
    if (this.ScreenWidth < 769) {
      this.profileButtonToggle = 'off';
    } else {
      this.profileButtonToggle = 'on';
    }
  }

  prueba(){
    console.log("funciona")
  }
}
