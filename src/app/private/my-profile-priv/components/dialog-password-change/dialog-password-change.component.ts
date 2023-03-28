import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


export interface UserData {
  user_id: string,
  user_username: string,
  name: string,
  password: string,
}

@Component({
  selector: 'app-dialog-password-change',
  templateUrl: './dialog-password-change.component.html',
  styleUrls: ['./dialog-password-change.component.scss']
})

export class DialogPasswordChangeComponent {
  usuarios: UserData =
    {
      user_id: 'a12',
      user_username: 'marialopez',
      name: 'María López',
      password: '123'
    }


  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) { }

  public cambioPasswordForm: FormGroup = this.fb.group({
    password0: ['', Validators.required],
    password1: ['', Validators.required],
    password2: ['', Validators.required],

  }, {
    validators: this.passwordsIguales('password1', 'password2')
  });

  ngOnInit() { }

  coincidenciaAntiguaPassword() {
    const userPassword = this.cambioPasswordForm.get('password0')?.value;

    if ((this.usuarios.password !== userPassword))
      return true
    else
      return false
  }

  crearPassword() {
    this.cambioPasswordForm.markAllAsTouched()
    if(!this.contrasenasNoValidas() && this.cambioPasswordForm.valid) {
      this.openSnackBar()
    }
    console.log(this.cambioPasswordForm.value)
  }

  contrasenasNoValidas() {
    const pass1 = this.cambioPasswordForm.get('password1')?.value;
    const pass2 = this.cambioPasswordForm.get('password2')?.value;

    if ((pass1 !== pass2)) {
      return true;
    } else {
      return false;
    }
  }

  passwordsIguales(pass1Name: string, pass2Name: string) {
    return (formGroup: FormGroup) => {

      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if (pass1Control?.value === pass2Control?.value) {
        pass2Control?.setErrors(null)
      } else {
        pass2Control?.setErrors({ noEsIgual: true })
      }

    }
  }

  openSnackBar() {
    this._snackBar.open('La contraseña se ha cambiado correctamente', '', {
      duration: 1000
    });
  }
}