import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SideMenuComponent } from './components/sideMenu/sideMenu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainComponent, SideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() {
    if (localStorage.getItem('theme')) {
      document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') as string);
    }
    if (localStorage.getItem('color')) {
      (document.querySelector(':root') as any)?.style.setProperty('--primary', localStorage.getItem('color') as string);
    }
  }
}
