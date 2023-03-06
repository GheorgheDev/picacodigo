import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss']
})
export class LoginComponent {

  public formSubmitted = false;

  public loginForm = this.fb.group({
    email: ['test100@hotmail.com', [Validators.required, Validators.email ]],
    password: ['123456', Validators.required ],

  });

  constructor( private router: Router,
               private fb: FormBuilder ) {}

 

  login() {

    /* this.router.navigateByUrl('/'); */

    console.log( this.loginForm.value )

  }

}
