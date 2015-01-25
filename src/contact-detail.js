import {WebAPI} from './web-api';
import {App} from './app';

export class ContactDetail {
  static inject() { return [App,WebAPI]; }
  constructor(app,api){
    this.app = app;
    this.api = api;
  }

  activate(params, qs, config){
    return this.api.getContactDetails(params.id).then(contact => {
      this.app.selectedId = contact.id;
      this.contact = contact;
      config.navModel.title =  contact.firstName;
      this.originalJSON = JSON.stringify(contact);
    });
  }

  get canSave(){
    return this.contact.firstName && this.contact.lastName && !this.api.isRequesting;
  }

  save(){
    this.api.saveContact(this.contact).then(contact => {
      this.contact = contact;
      this.originalJSON = JSON.stringify(this.contact);
    });
  }

  canDeactivate(){
    if(this.originalJSON != JSON.stringify(this.contact)){
      let result = confirm('You have unsaved changes. Are you sure you wish to leave?');
      
      if(!result){
        this.app.selectedId = this.contact.id;
      }

      return result;
    }

    return true;
  }
}