import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-secondary',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './secondary.component.html',
  styleUrl: './secondary.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondaryComponent { }
