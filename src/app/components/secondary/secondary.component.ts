import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TimelineComponent } from '../timeline/timeline.component';
import { ITimeLine } from '../../models/timeline.model';
declare var myCvData: any;
@Component({
  selector: 'app-secondary',
  standalone: true,
  imports: [
    CommonModule,
    TimelineComponent,
  ],
  templateUrl: './secondary.component.html',
  styleUrl: './secondary.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondaryComponent {
  public myCvData = myCvData;
  public experienceTimeline: ITimeLine;
  constructor() {

    this.experienceTimeline = {
      nom: 'Expériences',
      events: this.myCvData.experiences.map((experience: any) => {
        return {
          dateDebut: experience.startDate,
          dateFin: experience.endDate,
          titre: experience.job + ' - ' + experience.business,
          description: experience.descriptions,
        };
      })
    };
  }
}
