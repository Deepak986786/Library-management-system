import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username: string='';
password: string='';
role: string="user";
  constructor() { }

  ngOnInit(): void {
  }
  register(){
    console.log(this.username , this.password , this.role)

  }

}
