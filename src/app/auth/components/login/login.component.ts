import { Router } from '@angular/router';
import { LoginServiceService } from './services/login-service.service';
import { UserData } from 'src/app/shared/models/user-data';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userLog!: UserData

  constructor(private loginService: LoginServiceService, private fb: FormBuilder, private router: Router) { }

  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],

  });


  login(email: string, password: string) {
    this.loginService.getUserByLogin(email, password).subscribe(
      (user) => {
        this.userLog = user;
        sessionStorage.setItem('email', email)

        console.log(this.userLog.user_id)
        sessionStorage.setItem('uer_id', this.userLog.user_id)

        this.redirection(this.userLog)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  redirection(userLog: UserData) {
    if (this.userLog) {
      this.router.navigate(['/'])
    } else {
      console.error('Este usuario no está registrado')
    }
  }
}