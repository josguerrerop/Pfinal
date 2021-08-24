import { Component, OnInit } from '@angular/core';
import { childRoutes } from 'src/app/admin/child-routes';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  showMenu=false;
  routes = childRoutes;

  constructor() { }

  ngOnInit(): void {
  }

}
