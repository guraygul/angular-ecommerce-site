import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionSearch, ionPersonOutline, ionHeartOutline, ionBasketOutline } from '@ng-icons/ionicons';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  viewProviders: [provideIcons({ ionSearch, ionPersonOutline, ionHeartOutline, ionBasketOutline})]
})
export class HeaderComponent{
selectedOption: any;
// dropdown.component.ts

  open = false;

}
