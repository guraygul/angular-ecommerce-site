import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    public authService: AuthService
  ) { }

  login(username:string,userPassword:string) {
    this.authService.LogIn(username, userPassword)
      .then((user) => {
        console.log(user)
      })
      .catch(err => {
        return err;
      })
  }

  register(username:string,userPassword:string) {
    this.authService.Register(username, userPassword)
  }
}