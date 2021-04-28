import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from'@angular/router';
import { ListService } from './lists.service';

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
  
  constructor(private route:ActivatedRoute, private listService:ListService) { }

  ngOnInit() {
    if(this.route.snapshot.data['myData']){
      this.title = this.route.snapshot.data['myData']
      console.log(this.title);
    }
  }

}
