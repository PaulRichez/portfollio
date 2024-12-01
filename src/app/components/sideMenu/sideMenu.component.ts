import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BypassHtmlSanitizerPipe } from '../../pipes/bypassHtmlSanitizer.pipe';
import { getSvgPath } from '../../pipes/getSvg.pipe';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    CommonModule,
    BypassHtmlSanitizerPipe,
    getSvgPath
  ],
  templateUrl: './sideMenu.component.html',
  styleUrl: './sideMenu.component.css',
})
export class SideMenuComponent implements OnInit {
  isDrugFont = true;
  openElement: string | null = null;
  openModal: string | null = null;
  themeList = ['light', 'dark'];
  colorList = ['red', 'hsl(195, 85%, 41%)', 'green', 'yellow', 'purple', 'orange'];
  repository = 'github.com/PaulRichez/portfollio';
  libraryList = [
    {
      label: 'Angular 17',
      logoClass: 'logo-angular',
    },
    {
      label: 'PicoCSS',
      inlineSvg: `
      <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" height="56px"><path fill="currentColor" d="M633.43 429.23c0 118.38-49.76 184.72-138.87 184.72-53 0-92.04-25.37-108.62-67.32h-2.6v203.12H250V249.7h133.67v64.72h2.28c17.24-43.9 55.3-69.92 107-69.92 90.4 0 140.48 66.02 140.48 184.73zm-136.6 0c0-49.76-22.1-81.96-56.9-81.96s-56.9 32.2-57.24 82.28c.33 50.4 22.1 81.63 57.24 81.63 35.12 0 56.9-31.87 56.9-81.95zM682.5 547.5c0-37.32 30.18-67.5 67.5-67.5s67.5 30.18 67.5 67.5S787.32 615 750 615s-67.5-30.18-67.5-67.5z"></path>
      </svg>
      `,
    },
  ];
  fontList = [
    {
      label: 'Material Icons',
    },
    {
      label: 'Zen Old Mincho',
    },
    {
      label: 'JLRPlacebo',
    },
  ];

  private eventListenr = this.eventListenerMenu.bind(this);
  ngOnInit(): void {
  }

  changeFont(font: string): void {
    // change root --font-family variable  --font-family: 'JLR Placebo',Zen Old Mincho,Helvetica,Arial,sans-serif;
    if (font == 'pills') {
      this.isDrugFont = true;
      document.documentElement.style.setProperty('--font-family', 'JLR Placebo,Zen Old Mincho,Helvetica,Arial,sans-serif');
    } else {
      this.isDrugFont = false;
      document.documentElement.style.setProperty('--font-family', 'Zen Old Mincho,Helvetica,Arial,sans-serif');
    }
  }

  changeTheme(theme: string): void {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  changeColor(color: string): void {
    (document.querySelector(':root') as any)?.style.setProperty('--primary', color);
    localStorage.setItem('color', color);
  }

  openElementToggle(element: string): void {
    if (this.openElement === element) {
      this.openElement = null;
      this.removeEventListener();
    } else {
      this.openElement = element;
      setTimeout(() => document.addEventListener('click', this.eventListenr));
    }
  }

  openModalToggle(modal: string): void {
    if (this.openModal === modal) {
      document.documentElement.classList.add('modal-is-closing');
      setTimeout(() => {
        document.documentElement.classList.remove('modal-is-closing');
        document.documentElement.classList.remove('modal-is-open');
        this.openModal = null;
      }, 400);
    } else {
      this.openModal = modal;
      document.documentElement.classList.add('modal-is-open');
      document.documentElement.classList.add('modal-is-opening');
      setTimeout(() => {
        document.documentElement.classList.remove('modal-is-opening');
      }, 400);

    }
  }

  removeEventListener(): void {
    setTimeout(() => document.removeEventListener('click', this.eventListenr));
  }


  eventListenerMenu(event: any): void {
    if (!event.target?.classList?.contains('item-active-element')) {
      this.openElement = null;
      this.removeEventListener();
    }
  }
}
