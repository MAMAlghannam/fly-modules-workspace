import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initExternals } from 'mfe-helpers';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

initExternals(environment.production);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
