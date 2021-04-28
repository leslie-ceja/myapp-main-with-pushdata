import { Component } from '@angular/core';
import { ActivatedRoute, Router } from'@angular/router'
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  index;
  data;
  lists = ['Homework','Groccery List','Chores'];

  constructor(private router: Router, private route:ActivatedRoute, private dataService:DataService) {
    this.route.queryParams.subscribe(info =>{
      if(info && info.myData){
        this.data = this.route.snapshot.data['myData']
      }
    });
  }

  
  removeList(i) {
    console.log('List removed')
    this.lists.splice(i,1);
  }

  gotoNewListPage() {
    this.router.navigate(['/newlist']);
  }

  gotoList(i){
    this.data.push(i);
    this.dataService.setData(2, this.data)
    console.log("Hello");
    console.log(this.data);
    this.router.navigateByUrl('listview/2');
  }

  ngOnInit() {
    if(this.route.snapshot.data['myData']){
      this.data = this.route.snapshot.data['myData']
      this.lists.push(this.data)//NEW???
    }
  }
}
