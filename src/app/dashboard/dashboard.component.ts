import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  doc = { accountType: 'regular' };
  linksList = {};

  constructor() {}

  ngOnInit() {
    this.doc.accountType !== 'admin'
      ? (this.linksList = {
        Profile: ['Edit', 'Delete'],
        Commentary: ['add', 'edit'],
        Bible: ['add', 'edit'],
        Feedback: ['Lists'],
        Donation: ['Lists']
      })
      : (this.linksList = {
        Profile: ['Edit', 'Upgrade', 'Delete'],
        Documentation: 'Documentation',
        Feedback: 'Send',
        Donation: 'Donate'
      });
    console.log(this.linksList);
  }

  getLists() {
    return this.linksList;
  }
}
