import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../service/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.css']
})
export class DashboardMenuComponent implements OnInit {

  constructor(private globalService:GlobalService, private router:Router) { }

  public logout() {
    this.globalService.logout();
    this.router.navigate(['/']);
    console.log(this.globalService.user);
}

  ngOnInit() {
  }

}
