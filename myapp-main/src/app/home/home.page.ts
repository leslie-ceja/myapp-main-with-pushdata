import { Component } from '@angular/core';
import { ActivatedRoute, Router } from'@angular/router'
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  data;
  lists = ['Homework','Groccery List','Chores'];//NOT BEING USED
  servicelist;

  constructor(private router: Router, private route:ActivatedRoute, private dataService:DataService) {
    this.route.queryParams.subscribe(info =>{
      if(info && info.myData){
        this.data = this.route.snapshot.data['myData']
      }
    });
  }

  
  removeList(i) {
    console.log(i);
    this.lists.splice(i,1);
    this.dataService.remove(i);
  }

  gotoNewListPage() {
    this.router.navigate(['/newlist']);
  }

  gotoList(list){
    this.dataService.setData(2, list);
    console.log("Hello");
    console.log(list);
    this.router.navigateByUrl('listview/2');
  }

  ngOnInit() {
    this.servicelist = this.dataService.getallList();
    //NOT BEING USED
    if(this.route.snapshot.data['myData']){
      this.data = this.route.snapshot.data['myData']
      this.lists.push(this.data)//NEW???
    }
  }


}
