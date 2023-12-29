import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({ name: 'bypassHtmlSanitizer', standalone: true, })
export class BypassHtmlSanitizerPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  transform(html: string | null): SafeHtml {
    if (html === null) {
      return '';
    }
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
