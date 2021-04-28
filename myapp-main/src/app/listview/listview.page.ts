import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.page.html',
  styleUrls: ['./listview.page.scss'],
})
export class ListviewPage implements OnInit {

  title ="";
  public form = [
    {val:"", isChecked: false}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
