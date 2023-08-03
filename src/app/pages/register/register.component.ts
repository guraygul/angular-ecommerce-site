import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionLogoGoogle } from '@ng-icons/ionicons';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  viewProviders: [provideIcons({ ionLogoGoogle })]
})
export class RegisterComponent {

  constructor(
    public authService: AuthService
  ) { }

  login(userMail:string,userPassword:string) {
    this.authService.LogIn(userMail, userPassword)
      .then((user) => {
        console.log(user);
        
      })
      .catch(err => {
        return err;
      })
  }

  register(userMail:string,userPassword:string) {
    this.authService.Register(userMail, userPassword)
  }
}
