import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = [];
  list= ['Homework','Groccery List','Shopping','Chores'];

  constructor() { }

  setData(id, data){
    this.data[id] = data;
  }
  getData(id){
    return this.data[id];
  }
  addList(name: string){
    this.list.push(name);
  }
  getallList(){
    return this.list;
  }
}
