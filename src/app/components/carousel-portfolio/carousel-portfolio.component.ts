import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { BypassHtmlSanitizerPipe } from '../../pipes/bypassHtmlSanitizer.pipe';
import { getSvgPath } from '../../pipes/getSvg.pipe';

@Component({
  selector: 'app-carousel-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    BypassHtmlSanitizerPipe,
    getSvgPath,
    AsyncPipe,
  ],
  templateUrl: './carousel-portfolio.component.html',
  styleUrl: './carousel-portfolio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class carouselPortfolioComponent {
  constructor(public portfolioService: PortfolioService) {

  }
}
