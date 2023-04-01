import { DialogProfilePhotoChangeComponent } from '../dialog-profile-photo-change/dialog-profile-photo-change.component';
import { DialogUserDataChangeComponent } from '../dialog-user-data-change/dialog-user-data-change.component';
import { DialogPasswordChangeComponent} from '../dialog-password-change/dialog-password-change.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserData } from 'src/app/shared/models/user-data';

@Component({
  selector: 'app-my-profile-priv',
  templateUrl: './my-profile-priv.component.html',
  styleUrls: ['./my-profile-priv.component.scss'],
})

export class MyProfilePrivComponent implements OnInit {
  
  /* esto se adquiera de sessionstorage */
  userType = 1
  user_id = 1

  /* esto se adquiere de un get userbyID */
  userLogged: UserData = 
    {
      user_id: "1",
      username: 'Manolo25',
      fullname: 'Manolo Ortiz López',
      email: 'michael.lawson@reqres.in',
      phone: '123-456-789',
      birthdate:  new Date("1998-01-16"),
      picture: '/assets/images/img_user.jpg',
    }
  ;



  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  openNewProfilePhotoDialog() {
    this.dialog.open(DialogProfilePhotoChangeComponent);
  }

  openPasswordDialog() {
    this.dialog.open(DialogPasswordChangeComponent);
  }

  openUserInfoDialog() {
    this.dialog.open(DialogUserDataChangeComponent);
  }
}