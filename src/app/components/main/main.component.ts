import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DateToCurrentPipe } from '../../pipes/dateToCurrent.pipe';
import { BypassHtmlSanitizerPipe } from '../../pipes/bypassHtmlSanitizer.pipe';
import { getSvgPath } from '../../pipes/getSvg.pipe';
import { CvService } from '../../services/cv.service';

declare var myCvData: any;
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    DateToCurrentPipe,
    BypassHtmlSanitizerPipe,
    getSvgPath,
    AsyncPipe,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  public myCvData = myCvData;
  constructor(
    private cvService: CvService,
  ) {
    console.log(this.myCvData);
  }

  downloadCv() {
    this.cvService.getMyCV().download('cv_paul_richez.pdf');
  }
}
