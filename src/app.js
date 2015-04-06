import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {WebAPI} from './web-api';

@inject(Router, WebAPI)
export class App {
  constructor(router, api) {
    this.router = router;
    this.api = api;

    this.router.configure(config => {
      config.title = 'Contacts';
      config.map([
        { route: '',              moduleId: 'no-selection',   title: 'Select'},
        { route: 'contacts/:id',  moduleId: 'contact-detail' }
      ]);
    });
  }
}
