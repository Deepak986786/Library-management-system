import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private auth: AuthService, private router: Router
  ) { }

  ngOnInit(): void {
  }
  login() {
    let credential = {
      email: this.email,
      password: this.password
    }
    this.auth.login(credential).subscribe(data => {
      console.log('login-data', data);
      this.auth.setUser(data.user)
      if (data.user.role === "admin") {
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.router.navigate(['/user/dashboard']);
      }
    })

  }

}
