import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  url: any;
  user: any;
  constructor(private route: Router) {
    this.url = this.route.url;
  }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user'))
    console.log(this.user);
    
  }

  navigateTo(endPoint: any): void{
  }
}
