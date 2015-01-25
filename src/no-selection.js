import {App} from './app';

export class NoSelection{
  static inject(){ return [App]; }
  constructor(app){
    this.app = app;
  }

  activate(){
    this.app.selectedId = null;
  }
}