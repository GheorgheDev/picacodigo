import { Router } from '@angular/router';
import { LoginServiceService } from './services/login-service.service';
import { UserData } from 'src/app/shared/models/user-data';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  userLog!: UserData

  constructor(private loginService: LoginServiceService, private fb: FormBuilder, private router: Router) { }

  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],

  });

  ngOnInit(){
    let userIsLogged: string | null = sessionStorage.getItem('email');
    if(!!userIsLogged)
      this.router.navigate(['/'])
  }

  login(email: string, password: string) {
    this.loginService.getUserByLogin(email, password).subscribe(
      (user) => {
        if(!!user){
          this.userLog = user;
          sessionStorage.setItem('email', email)
          sessionStorage.setItem('user_id', this.userLog.user_id)
          if(this.userLog.rol == 'user')
            sessionStorage.setItem('userType', '1')
          else if(this.userLog.rol == 'admin')
            sessionStorage.setItem('userType', '2')
          this.redirection(this.userLog)
        }else
          alert("Usuario o contraseña incorrecta")
      },
      (error) => {
        console.log(error)
        
      }
    )
  }

  redirection(userLog: UserData) {
    if (userLog) {
      this.router.navigate(['/'])
    } else {
      console.error('Este usuario no está registrado')
    }
  }
}