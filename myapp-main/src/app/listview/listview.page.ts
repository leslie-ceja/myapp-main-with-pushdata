import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from'@angular/router'
import { Task } from './task.model';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.page.html',
  styleUrls: ['./listview.page.scss'],
})
export class ListviewPage implements OnInit {
  
  tasks: Task[] = [
    {
    name: 'Parallel Programing Presentation',
    isChecked: false
    },
    {
      name: 'Software Engineering Final',
      isChecked: false
    }
  ];

  title;
  public form = [
    {val:"", isChecked: false}
  ];
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.data['myData']){
      this.title = this.route.snapshot.data['myData']
      console.log(this.title);
    }
  }

}
