import {EventAggregator} from 'aurelia-event-aggregator';
import {Behavior} from 'aurelia-framework';
import {WebAPI} from './web-api';
import {ContactUpdated, ContactViewed} from './messages';

export class ContactList {
  static inject() { return [WebAPI,EventAggregator]; }

  static metadata(){
    return Behavior
      .customElement('contact-list')
      .withProperty('latency');
  };

  constructor(api,ea){
    this.api = api;
    this.contacts = [];

    ea.subscribe(ContactViewed, msg => this.select(msg.contact));
    ea.subscribe(ContactUpdated, msg => {
      let id = msg.contact.id;
      let found = this.contacts.filter(x => x.id == id)[0];
      Object.assign(found, msg.contact);
    });
  }

  latencyChanged(newValue){
    if(newValue && parseInt(newValue) !== NaN){
      this.api.latency = newValue;
    }else{
      this.api.latency = null;
    }
  }

  created(){
    this.api.getContactList().then(contacts => {
      this.contacts = contacts;
    });
  }

  select(contact){
    this.selectedId = contact.id;
    return true;
  }
}
