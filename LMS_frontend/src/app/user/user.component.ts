import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.auth.getUser()?.email === "" || this.auth.getUser() == undefined) {
      this.router.navigate(['/user/login'])
    }
  }

  navItems = [
    { title: 'Home', url: '/user/dashboard' },
    { title: 'My Books', url: '/user/books-borrowed' },
    { title: 'Profile', url: '/user/profile' }
  ]

}
