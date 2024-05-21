import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private auth: AuthService, private router: Router
  ) { }

  ngOnInit(): void {
    if (this.auth.getUser()?.email === "" || this.auth.getUser() == undefined) {
      this.router.navigate(['/admin/login'])
    }
  }

  navItems = [
    { title: 'Users', url: '/admin/users-list' },
    { title: 'Manage Books', url: '/admin/manage-books' },
    { title: 'Profile', url: '/admin/profile' }
  ]

}
