import nprogress from 'nprogress';
import {Behavior} from 'aurelia-framework';

export class LoadingIndicator {
  static metadata(){
    return Behavior
      .customElement('loading-indicator')
      .withProperty('loading')
      .noView();
  };

  loadingChanged(newValue){
    if(newValue){
      nprogress.start();
    }else{
      nprogress.done();
    }
  }
}