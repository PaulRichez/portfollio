import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'getSvg', standalone: true, })
export class getSvgPath implements PipeTransform {
  constructor() { }

  transform(path: string): Promise<string> {
    // return le fichier du path en string
    const getFile = async (path: string) => {
      const response = await fetch(path);
      const data = await response.text();
      return data;
    };

    return getFile(path);

  }
}
