import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterServiceService } from './services/register-service.service';
import { UserData } from 'src/app/shared/models/user-data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.scss']
})

export class RegisterComponent {
  userRegister!: UserData

  constructor( private fb: FormBuilder, private router: Router, private registerService: RegisterServiceService) { }

  public formSubmitted = false;

  public registerForm = this.fb.group({
    username: ['', [ Validators.required, Validators.minLength(3) ]],
    fullname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email ]],
    password: ['', Validators.required ],
    password2: ['', Validators.required ],
    phone: ['', [Validators.required]],
    birthdate: ['', [Validators.required]],
    terms: [false, Validators.required ],

  },{
    validators: this.passwordsIguales('password', 'password2')
  });

  addNewUser() {
    this.formSubmitted = true;

    this.registerService.addNewUser(this.registerForm.value).subscribe(
      (user) => {
        this.userRegister = user

        console.log("usuario", this.userRegister)

        this.redirection(this.userRegister)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  redirection(userRegister: UserData) {
    if (this.userRegister) {
      this.router.navigate(['/auth/login'])
    } else {
      console.error('Error de registro')
    }
  }

  campoNoValido( campo:string ): boolean {
    if (this.registerForm.get(campo)?.invalid && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }
  }

  contrasenasNoValidas() {
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    if ( (pass1 !== pass2) && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }
  }

  aceptaTerminos() {
    return!this.registerForm.get('terminos')?.value && this.formSubmitted;
  }

  passwordsIguales(pass1Name: string, pass2Name: string ) {
    return ( formGroup: FormGroup) => {

      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if ( pass1Control?.value === pass2Control?.value ) {
        pass2Control?.setErrors(null)
      } else {
        pass2Control?.setErrors({ noEsIgual: true })
      }
    }
  }
}