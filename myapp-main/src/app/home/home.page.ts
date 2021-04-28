import { Component } from '@angular/core';
import { ActivatedRoute, Router } from'@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  data;
  lists = ['Homework','Groccery List','Chores'];

  constructor(private router: Router, private route:ActivatedRoute) {
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

  ngOnInit() {
    if(this.route.snapshot.data['myData']){
      this.data = this.route.snapshot.data['myData']
      this.lists.push(this.data)//NEW???
    }
  }
}
