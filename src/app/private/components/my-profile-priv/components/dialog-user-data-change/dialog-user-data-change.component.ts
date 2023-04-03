import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MyProfilePrivServiceService } from '../../services/my-profile-priv-service.service';

@Component({
  selector: 'app-dialog-user-data-change',
  templateUrl: './dialog-user-data-change.component.html',
  styleUrls: ['./dialog-user-data-change.component.scss']
})
export class DialogUserDataChangeComponent {
  constructor(private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private profileService: MyProfilePrivServiceService) { }

  public userDataChangeForm: FormGroup = this.fb.group({
    user_id: [this.data.user.user_id],
    username: [this.data.user.username, Validators.required],
    fullname: [this.data.user.fullname, Validators.required],
    password: [this.data.user.password],
    birthdate: [this.data.user.birthdate, Validators.required],
    email: [this.data.user.email, Validators.required],
    phone: [this.data.user.phone],
    login: [this.data.user.login],
    rol: [this.data.user.rol],
    picture: [this.data.user.picture],
    active: [this.data.user.active],
  })

  userDataChange() {
    if (this.userDataChangeForm.valid) {
      this.profileService.updateUser(this.userDataChangeForm.value)
        .subscribe(() => {
          this.openSnackBar();
          location.reload();
        })
    }
  }

  openSnackBar() {
    this._snackBar.open('Los cambios se han guardado correctamente', '', {
      duration: 1000
    });
  }
}