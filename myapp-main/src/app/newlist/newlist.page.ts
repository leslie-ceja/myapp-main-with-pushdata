import { Component, OnInit } from '@angular/core';
import { Router } from'@angular/router'

@Component({
  selector: 'app-newlist',
  templateUrl: './newlist.page.html',
  styleUrls: ['./newlist.page.scss'],
})
export class NewlistPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}
