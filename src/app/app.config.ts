import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { DateToCurrentPipe } from './pipes/dateToCurrent.pipe';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    DateToCurrentPipe,
  ]
};
