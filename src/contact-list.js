import {EventAggregator} from 'aurelia-event-aggregator';
import {WebAPI} from './web-api';
import {ContactUpdated, ContactViewed} from './messages';

export class ContactList {
  static inject = [WebAPI, EventAggregator];
  constructor(api, ea){
    this.api = api;
    this.contacts = [];

    this.listFilter = '';

    ea.subscribe(ContactViewed, msg => this.select(msg.contact));
    ea.subscribe(ContactUpdated, msg => {
      let id = msg.contact.id;
      let found = this.contacts.filter(x => x.id == id)[0];
      Object.assign(found, msg.contact);
    });
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

export class FilterValueConverter {
  toView(listData, value) {
    if(value === undefined || value === '') {
      return listData;
    } else {
      let searchText = value.toLowerCase();
      return listData.filter( (c) => {
        return c.firstName.toLowerCase().indexOf(searchText) > -1 ||
               c.lastName.toLowerCase().indexOf(searchText) > -1;
      })
    }
  }
}
