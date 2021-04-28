import { Component } from '@angular/core';
import { Router } from'@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  lists = ['Homework','Groccery List','Chores'];
  removeList(i) {
    console.log('List removed')
    this.lists.splice(i,1);
  }
  addList(listname) {
    this.lists.push(listname);
  }
  gotoNewListPage() {
    this.router.navigate(['/newlist']);
  }
}
