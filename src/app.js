import {Router} from 'aurelia-router';
import {WebAPI} from './web-api';
import {ValidateAttachedBehaviorConfig} from 'aurelia-validation';

export class App {
  static inject() { return [Router,WebAPI, ValidateAttachedBehaviorConfig]; }
  constructor(router, api, validateAttachedBehaviorConfig) {
    this.router = router;
    this.api = api;

    //Configuring the way validation shows messages:
    validateAttachedBehaviorConfig.appendMessageToLabel = false;
    validateAttachedBehaviorConfig.appendMessageToInput = true;

    this.router.configure(config => {
      config.title = 'Contacts';
      config.map([
        { route: '', moduleId: 'no-selection', title: 'Select'},
        { route: 'contacts/:id', moduleId: 'contact-detail' }
      ]);
    });
  }
}
