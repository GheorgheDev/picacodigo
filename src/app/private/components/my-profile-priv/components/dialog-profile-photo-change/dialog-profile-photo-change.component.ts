import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-profile-photo-change',
  templateUrl: './dialog-profile-photo-change.component.html',
  styleUrls: ['./dialog-profile-photo-change.component.scss']
})
export class DialogProfilePhotoChangeComponent implements OnInit {
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
  }

  public changeDataProfile: FormGroup = this.fb.group({
    new_photo: ['', Validators.required]
  })

  updateProfilePhoto() {
    console.log(this.changeDataProfile.value)

    this.openSnackBar()
  }

  openSnackBar() {
    this._snackBar.open('La foto de perfil se ha cambiado correctamente', '', {
      duration: 1000
    });
  }
}
