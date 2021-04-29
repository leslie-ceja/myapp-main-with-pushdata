import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from'@angular/router';
import { ListsService } from '../lists.service';
import { Task } from './task.model'
import { DataService } from '../data.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.page.html',
  styleUrls: ['./listview.page.scss'],
})
export class ListviewPage implements OnInit {

  title = "";
  check : boolean;
  public form = [
    {val:"", isChecked: false}
  ];
  
  tasks: Task[];
  //current: Task[];
  current = [];
  constructor(private router: Router,private route:ActivatedRoute, private listsService:ListsService, private dataService:DataService) { }

  gotoNewTask(){
    this.router.navigate(['/newtask']);
  }
  backtoHome(){
    this.router.navigate(['/home']);
  }
  ngOnInit() {
    this.tasks = this.listsService.getAllTasks();
    this.title = this.dataService.getData(2);
    console.log(this.title);
    for(let task of this.tasks) {
      console.log(task);
      if(task.id === this.title){
        this.current.push(task.name);
      }
    }
    //CREATE A NEW LIST AND ONLY ADD ITEMS WITH CERTAIN ID EX. SHCOOL
    //DISPLAY THAT LIST
  }
  checked(task){
    console.log(task);
    console.log(task.check);
    this.listsService.updateChecked(task, task.check);
  }

}
