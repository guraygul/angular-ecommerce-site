import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionLogoGoogle } from '@ng-icons/ionicons';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  viewProviders: [provideIcons({ ionLogoGoogle })]
})
export class RegisterComponent {

}
