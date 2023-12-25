import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DateToCurrentPipe } from '../../pipes/dateToCurrent.pipe';

declare var myCvData: any;
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    DateToCurrentPipe,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  public myCvData = myCvData;
  constructor() {
    console.log(myCvData);
  }
}
