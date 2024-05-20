import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navItems=[
    { title:'Users' , url:'/admin/users-list'},
    {title:'Manage Books', url:'/admin/manage-books'}
  ]

}
