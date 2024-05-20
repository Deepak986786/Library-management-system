import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
username: string='';
password: string='';
role: string="user";

  constructor() { }

  ngOnInit(): void {
  }
  login(){
     console.log(this.username , this.password , this.role)
  }

}
