import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService) {
    this.user = this.auth.getUser();
  }
  user: any;
  ngOnInit(): void {
  }

  @Input() navItems: any[] = [];

}
