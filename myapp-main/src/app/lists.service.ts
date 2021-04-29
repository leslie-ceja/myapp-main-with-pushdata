import { Injectable } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Task } from './listview/task.model';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  item = 0;
  private tasks: Task[] = [
    {
    id:"Homework",
    name: 'Parallel Programing HW5',
    date: '',
    reminder: 0,
    isChecked: false
    },
    {
      id:"Homework",
      name: 'Software Engineering Final',
      date: '',
      reminder: 0,
      isChecked: false
    },
    {
      id:"Groccery List",
      name: 'Eggs',
      date: '',
      reminder: 0,
      isChecked: false
    },
    {
      id:"Groccery List",
      name: 'Bread',
      date: '',
      reminder: 0,
      isChecked: false
    }
  ];

  constructor() { }

  getAllTasks() {
    return [...this.tasks];//takes copy of array 
  }
  getTask(name: string) {
    return {...this.tasks.find(task => {
      return task.name === name;
    })};//taske copy of properties
  }
  setItem(i){
    this.item = i;
  }
  getItem(){
    return this.item;
  }
  addItem(item: Task){
    this.tasks.push(item);
    console.log(item);
  }
  updateChecked(name){
    let temp = this.getTask(name);
    if(temp.isChecked === false){
      temp.isChecked = true;
    }
    else{
      temp.isChecked=false;
    }
    console.log(temp);
  }
}
