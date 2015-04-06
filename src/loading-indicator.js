import nprogress from 'nprogress';
import {bindableProperty, noView} from 'aurelia-framework';

@bindableProperty('loading')
@noView
export class LoadingIndicator {
  loadingChanged(newValue){
    if(newValue){
      nprogress.start();
    }else{
      nprogress.done();
    }
  }
}
