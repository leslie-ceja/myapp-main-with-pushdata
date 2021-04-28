import { Component, OnInit } from '@angular/core';
import { Router } from'@angular/router'

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.page.html',
  styleUrls: ['./newaccount.page.scss'],
})
export class NewaccountPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}
