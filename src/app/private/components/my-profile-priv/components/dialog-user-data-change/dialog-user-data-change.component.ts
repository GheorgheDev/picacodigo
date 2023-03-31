import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-dialog-user-data-change',
  templateUrl: './dialog-user-data-change.component.html',
  styleUrls: ['./dialog-user-data-change.component.scss']
})
export class DialogUserDataChangeComponent implements OnInit {
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  public userDataChangeForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: [''],
    birthday: ['', Validators.required],
    address: ['']
  })

  userDataChange() {
    console.log(this.userDataChangeForm.value)
  }

  saveNewDataChanges() {

    console.log(this.userDataChangeForm.valid)
    if (this.userDataChangeForm.valid)
      this.openSnackBar()
  }

  openSnackBar() {
    this._snackBar.open('Los cambios se han guardado correctamente', '', {
      duration: 1000
    });
  }
}
