import {EventAggregator} from 'aurelia-event-aggregator';
import {WebAPI} from './web-api';
import {App} from './app';
import {ContactUpdated,ContactViewed} from './messages';
import {areEqual} from './utility';
import {Validation} from 'aurelia-validation';

export class ContactDetail {
  static inject() { return [App,WebAPI,EventAggregator, Validation]; }
  constructor(app,api,ea,createValidator){
    this.app = app;
    this.api = api;
    this.ea = ea;
    this.createValidator = createValidator;
  }

  activate(params, qs, config){
    return this.api.getContactDetails(params.id).then(contact => {
      this.contact = contact;
      config.navModel.title = contact.firstName;
      this.originalContact = JSON.parse(JSON.stringify(contact));
      //Add validation after we've serialized the original contact
      contact.validation = this.createValidator.on(contact)
        .ensure('firstName').notEmpty().betweenLength(2,10) //required, 2-10 characters
        .ensure('lastName').notEmpty().betweenLength(5,30) //required, 5-30 characters
        .ensure('email').email() //Either empty, or a valid email
        .ensure('phoneNumber'); //No validation on phoneNumber
      this.ea.publish(new ContactViewed(contact));
    });
  }

  get canSave(){

    //validation.result.isValid does not force any validation to be executed,
    //it simply reflects the current state of the validation object
    //Properties that are not 'dirty' are considered invalid, but no error message is shown yet
    return this.contact.validation.result.isValid && !this.api.isRequesting;
  }

  save(){
    //checkAll() forces the complete validation model to be re-evaluated
    //This implies that all properties will be considered 'dirty' and thus all error messages will be shown
    if(this.contact.validation.checkAll()) {
      this.api.saveContact(this.contact).then(contact => {
        this.contact = contact;
        this.originalContact = JSON.parse(JSON.stringify(contact));
        this.ea.publish(new ContactUpdated(this.contact));
      });
    }
  }

  canDeactivate(){
    if(!areEqual(this.originalContact, this.contact)){
      let result = confirm('You have unsaved changes. Are you sure you wish to leave?');

      if(!result){
        this.ea.publish(new ContactViewed(this.contact));
      }

      return result;
    }

    return true;
  }
}
