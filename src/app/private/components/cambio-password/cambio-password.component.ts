import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambio-password',
  templateUrl: './cambio-password.component.html',
  styleUrls: [ './cambio-password.component.scss']
})

export class CambioPasswordComponent {

  public formSubmitted = false;

  public cambioPasswordForm = this.fb.group({
    contrasena: ['12345', Validators.required ],
    password: ['123456', Validators.required ],
    password2: ['123456', Validators.required ],

  },{
    validators: this.passwordsIguales('password', 'password2')
  });

  constructor( private fb: FormBuilder) { }

  crearPassword() {
    this.formSubmitted = true;
    console.log( this.cambioPasswordForm.value );

    if ( this.cambioPasswordForm.valid ) {
      console.log('posteando formulario')
    } else {
      console.log ('Formulario no es correcto...');
    }
  }

  campoNoValido( campo:string ): boolean {
    if (this.cambioPasswordForm.get(campo)?.invalid && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }

  }

  contrasenasNoValidas() {
    const pass1 = this.cambioPasswordForm.get('password')?.value;
    const pass2 = this.cambioPasswordForm.get('password2')?.value;

    if ( (pass1 !== pass2) && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }
  }
  



  aceptaTerminos() {
    return!this.cambioPasswordForm.get('terminos')?.value && this.formSubmitted;
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
