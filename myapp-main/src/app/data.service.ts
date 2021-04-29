import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = [];
  list= ['Homework','Shopping','Chores'];

  constructor() { }

  setData(id, data){
    this.data[id] = data;
  }
  getData(id){
    return this.data[id];
  }
  addList(){

  }
  getallList(){
    return this.list;
  }
}
