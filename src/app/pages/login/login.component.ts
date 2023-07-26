import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionLogoGoogle } from '@ng-icons/ionicons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, NgIconComponent],
  viewProviders: [provideIcons({ ionLogoGoogle })]
})
 
export class LoginComponent {
  passwordControl : FormControl = new FormControl('', Validators.required);

  loginForm : FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  constructor( private authService: AuthService) {}
  logInWithGoogle(){
    this.authService.signInWithGoogle().then((res: any) => {

    }).catch((error: any) => {
      console.error(error);
    })
  }

}
