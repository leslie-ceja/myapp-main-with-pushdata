import { Injectable } from '@angular/core';
import { receiveMessageOnPort } from 'node:worker_threads';
import { Task } from './listview/task.model';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  private tasks: Task[] = [
    {
    name: 'Parallel Programing HW5',
    isChecked: false
    },
    {
      name: 'Software Engineering Final',
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
