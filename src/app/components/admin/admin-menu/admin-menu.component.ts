import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutComponent } from '../../layout/layout.component';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void { }

}
