import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.scss']
})
export class ManageBooksComponent implements OnInit {

  constructor( private auth:AuthService , private router:Router) { }

  ngOnInit(): void {
    if (this.auth.getUser()?.email === "" || this.auth.getUser() == undefined) {
      this.router.navigate(['/admin/login'])
    }
  }

}
