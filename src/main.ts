import { bootstrapApplication } from '@angular/platform-browser';

import { RestApi } from './app/rest-api/rest-api';
import { appConfig } from './app/app.config';

bootstrapApplication(RestApi, appConfig)
  .catch(err => console.error(err));