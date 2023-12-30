import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TimelineComponent } from '../timeline/timeline.component';
import { ITimeLine } from '../../models/timeline.model';
import { carouselPortfolioComponent } from '../carousel-portfolio/carousel-portfolio.component';
declare var myCvData: any;
@Component({
  selector: 'app-secondary',
  standalone: true,
  imports: [
    CommonModule,
    TimelineComponent,
    carouselPortfolioComponent,
  ],
  templateUrl: './secondary.component.html',
  styleUrl: './secondary.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondaryComponent {
  public myCvData = myCvData;
  public experienceTimeline: ITimeLine;
  public diplomasTimeline: ITimeLine;
  constructor() {

    this.experienceTimeline = {
      nom: 'Expériences',
      events: this.myCvData.experiences.map((experience: any) => {
        return {
          dateDebut: experience.startDate,
          dateFin: experience.endDate,
          titre: experience.job,
          description: experience.descriptions,
          footer: `${experience.business}`,
        };
      })
    };
    this.diplomasTimeline = {
      nom: 'Diplômes',
      events: this.myCvData.diplomas.map((diploma: any) => {
        return {
          dateDebut: diploma.startDate,
          dateFin: diploma.endDate,
          titre: diploma.description,
          description: diploma.title,
        };
      })
    };
  }
}
