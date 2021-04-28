import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from'@angular/router'

@Component({
  selector: 'app-listview',
  templateUrl: './listview.page.html',
  styleUrls: ['./listview.page.scss'],
})
export class ListviewPage implements OnInit {
  
  title;
  public form = [
    {val:"", isChecked: false}
  ];
  
  constructor(private route:ActivatedRoute) { 
    this.route.queryParams.subscribe(info =>{
      if(info && info.myData){
        this.title = this.route.snapshot.data['myData']
      }
    });
  }

  ngOnInit() {
    if(this.route.snapshot.data['myData']){
      this.title = this.route.snapshot.data['myData']
      console.log(this.title);
    }
  }

}
