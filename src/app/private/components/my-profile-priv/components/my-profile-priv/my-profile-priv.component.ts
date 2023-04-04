import { DialogProfilePhotoChangeComponent } from '../dialog-profile-photo-change/dialog-profile-photo-change.component';
import { DialogUserDataChangeComponent } from '../dialog-user-data-change/dialog-user-data-change.component';
import { DialogPasswordChangeComponent } from '../dialog-password-change/dialog-password-change.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyProfilePrivServiceService } from '../../services/my-profile-priv-service.service';
import { UserData } from 'src/app/shared/models/user-data';

@Component({
  selector: 'app-my-profile-priv',
  templateUrl: './my-profile-priv.component.html',
  styleUrls: ['./my-profile-priv.component.scss'],
})

export class MyProfilePrivComponent implements OnInit {
  user: UserData;
  user_id = "17" // TODO: esto quitarlo porque lo vamos a obtener del localstorage
  userType = '1';

  constructor(
    public dialog: MatDialog,
    private profileService: MyProfilePrivServiceService
  ) { }

  ngOnInit(): void {
    this.profileService.getUserById(this.user_id)
      .subscribe(userLoggued => {
        this.user = userLoggued;
        this.user.picture = '/assets/images/img_user.jpg';
      })
  }

  openNewProfilePhotoDialog() {
    this.dialog.open(DialogProfilePhotoChangeComponent);
  }

  openPasswordDialog() {
    this.dialog.open(DialogPasswordChangeComponent, {
      data: { user: this.user }
    });
  }

  openUserInfoDialog() {
    this.dialog.open(DialogUserDataChangeComponent, {
      data: { user: this.user }
    });
  }
}