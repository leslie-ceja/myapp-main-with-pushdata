import { Component } from '@angular/core';
import { ActivatedRoute, Router } from'@angular/router'
import { DataService } from '../data.service';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  data;
  lists = ['Homework','Groccery List','Chores'];

  constructor(private router: Router, private route:ActivatedRoute, private dataService:DataService, private listsService:ListsService) {
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

  gotoList(list){
    this.dataService.setData(2, list);
    console.log("Hello");
    console.log(list);
    this.router.navigateByUrl('listview/2');
  }

  ngOnInit() {
    if(this.route.snapshot.data['myData']){
      this.data = this.route.snapshot.data['myData']
      this.lists.push(this.data)//NEW???
    }
  }


}
