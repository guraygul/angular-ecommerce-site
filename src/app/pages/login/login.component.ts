import { Component } from '@angular/core';
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

  login(userMail:string, userPassword:string) {
    this.authService.LogIn(userMail, userPassword)
      .then((user) => {
        console.log(user)
      })
      .catch(err => {
        return err;
      })
  }

  register(userName:string, userSurname:string, userMail:string,userPassword:string) {
    this.authService.Register(userMail, userPassword)
  }
}