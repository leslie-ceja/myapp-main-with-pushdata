import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.page.html',
  styleUrls: ['./newtask.page.scss'],
})
export class NewtaskPage implements OnInit {

  myDate: String = new Date().toISOString();

  constructor() { }

  ngOnInit() {
    console.log(this.myDate);
  }

}
