import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appDateToCurrent',
  standalone: true,
})
export class DateToCurrentPipe implements PipeTransform {

  transform(value: Date | string): unknown {
    // get number of years between now and the date passed in
    if (typeof value === 'string') {
      value = new Date(value);
    }
    const years = new Date().getFullYear() - value.getFullYear();
    return years + " ans";
  }

}
