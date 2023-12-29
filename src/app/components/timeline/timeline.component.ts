import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ITimeLine } from '../../models/timeline.model';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent implements OnInit {
  @Input() timeline: ITimeLine;

  ngOnInit() {
    console.log(this.timeline);
  }
 }
