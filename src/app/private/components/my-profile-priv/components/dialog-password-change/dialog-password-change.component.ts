import { Component, OnInit, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MyProfilePrivServiceService } from '../../services/my-profile-priv-service.service';

@Component({
  selector: 'app-dialog-password-change',
  templateUrl: './dialog-password-change.component.html',
  styleUrls: ['./dialog-password-change.component.scss']
})

export class DialogPasswordChangeComponent implements OnInit {
  changePasswordForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private profileService: MyProfilePrivServiceService
  ) { }

  get formGroup() {
    return this.changePasswordForm.controls;
  }

  ngOnInit(): void {
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      newPasswordRepeat: ['', Validators.required],
    },
      {
        validator: this.checkNewPassword
      });
  }

  changePassword() {
    this.submitted = true;

    if (this.changePasswordForm.valid && this.checkCurrentPassword()) {
      this.submitted = false;
      this.data.user.password = (this.changePasswordForm.get('newPassword') as FormControl).value;
      this.profileService.changePassword(this.data.user)
        .subscribe(() => {
          this.openSnackBar();
          this.changePasswordForm.reset();
        })
    }
  }

  checkCurrentPassword(): boolean {
    return this.data.user.password === (this.changePasswordForm.get('currentPassword') as FormControl).value;
  }

  checkNewPassword(control: FormControl): ValidationErrors | null {
    const newPassword = (control.get('newPassword') as FormControl).value;
    const newPasswordRepeat = (control.get('newPasswordRepeat') as FormControl).value;
    return newPassword !== newPasswordRepeat ? { notSame: true } : null;
  }

  openSnackBar() {
    this._snackBar.open('La contraseña se ha cambiado correctamente', '', {
      duration: 1000
    });
  }
}