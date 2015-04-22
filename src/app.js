import {WebAPI} from './web-api';

export class App {
  static inject = [WebAPI];
  constructor(api) {
    this.api = api;
  }

  configureRouter(config, router){
    config.title = 'Contacts';
    config.map([
      { route: '',              moduleId: 'no-selection',   title: 'Select'},
      { route: 'contacts/:id',  moduleId: 'contact-detail' }
    ]);

    this.router = router;
  }
}
