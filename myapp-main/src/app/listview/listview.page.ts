import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from'@angular/router';
import { ListsService } from '../lists.service';
import { Task } from './task.model'

@Component({
  selector: 'app-listview',
  templateUrl: './listview.page.html',
  styleUrls: ['./listview.page.scss'],
})
export class ListviewPage implements OnInit {

  title = "Homework";
  public form = [
    {val:"", isChecked: false}
  ];
  
  tasks: Task[];
  current: Task[];
  constructor(private route:ActivatedRoute, private listsService:ListsService) { }

  ngOnInit() {
    this.tasks = this.listsService.getAllTasks();
    for(let task of this.tasks) {
      console.log(task);
      if(task.id === this.title){
        this.current.push(task);
      }
    }
    //CREATE A NEW LIST AND ONLY ADD ITEMS WITH CERTAIN ID EX. SHCOOL
    //DISPLAY THAT LIST
  }

}
