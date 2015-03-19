import {EventAggregator} from 'aurelia-event-aggregator';
import {WebAPI} from './web-api';
import {App} from './app';
import {ContactUpdated,ContactViewed} from './messages';
import {areEqual} from './compare';

export class ContactDetail {
  static inject() { return [App,WebAPI,EventAggregator]; }
  constructor(app,api,ea){
    this.app = app;
    this.api = api;
    this.ea = ea;
  }

  activate(params, qs, config){
    return this.api.getContactDetails(params.id).then(contact => {
      this.contact = contact;
      config.navModel.title = contact.firstName;
      this.originalContact = JSON.parse(JSON.stringify(contact));
      this.ea.publish(new ContactViewed(contact));
    });
  }

  get canSave(){
    return this.contact.firstName && this.contact.lastName && !this.api.isRequesting;
  }

  save(){
    this.api.saveContact(this.contact).then(contact => {
      this.contact = contact;
      this.originalJSON = JSON.stringify(this.contact);
      this.ea.publish(new ContactUpdated(this.contact));
    });
  }

  canDeactivate(){
    if(!areEqual(this.originalContact, JSON.parse(JSON.stringify(this.contact)))){
      let result = confirm('You have unsaved changes. Are you sure you wish to leave?');

      if(!result){
        this.ea.publish(new ContactViewed(this.contact));
      }

      return result;
    }

    return true;
  }
}
