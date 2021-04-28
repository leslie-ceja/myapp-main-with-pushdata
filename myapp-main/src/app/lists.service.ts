import { Injectable } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Task } from './listview/task.model';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  private tasks: Task[] = [
    {
    id:"Homework",
    name: 'Parallel Programing HW5',
    isChecked: false
    },
    {
      id:"Homework",
      name: 'Software Engineering Final',
      isChecked: false
    },
    {
      id:"Groccery List",
      name: 'Eggs',
      isChecked: false
    },
    {
      id:"Groccery List",
      name: 'Bread',
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
}
