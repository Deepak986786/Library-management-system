import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username: string = '';
  password: string = '';
  role: string = "user";
  email: string = '';
  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
  }
  register() {
    let user = {
      name: this.username,
      password: this.password,
      email: this.email,
      role: this.role
    }
    console.log(this.username, this.password, this.role)
    this.authService.register(user).subscribe((data: any) => {
      console.log(data);
      if (data) {
        this.authService.setUser(data.user);
        console.log('registerdata', data.user);
        if (this.role === "admin") {
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.router.navigate(['/user/dashboard']);
        }
      }
    })
  }

}
