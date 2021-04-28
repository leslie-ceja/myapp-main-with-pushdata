import { Component, OnInit } from '@angular/core';
import { Router } from'@angular/router'
import { DataService } from '../data.service';

@Component({
  selector: 'app-newlist',
  templateUrl: './newlist.page.html',
  styleUrls: ['./newlist.page.scss'],
})
export class NewlistPage implements OnInit {

  input = "";
  data = [];//CAN THIS BE DECLARED EMPTY?

  constructor(private router: Router, private dataService:DataService) { }

  ngOnInit() {
  }

  gotoHomePage() {
    this.router.navigate(['/home']);
  }

  passData() {
    this.data.push(this.input);
    this.dataService.setData(1, this.data)
    this.router.navigateByUrl('home/1')
  }
}
