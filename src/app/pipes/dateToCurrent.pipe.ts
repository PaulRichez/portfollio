import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appDateToCurrent',
  standalone: true,
})
export class DateToCurrentPipe implements PipeTransform {

  transform(value: Date | string): unknown {
    console.log('value', value);
    // get number of years between now and the date passed in
    if (typeof value === 'string') {
      value = new Date(value);
    }

    const now = new Date();
    const Difference_In_Time = now.getTime() - value.getTime();
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    const years = Math.floor(Difference_In_Days / 365.25);
    // arrondit a l'entier inferieur
    return years;
  }

}
