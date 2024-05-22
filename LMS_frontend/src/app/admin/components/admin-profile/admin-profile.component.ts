import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  user: any;
  editMode: boolean = false;

  constructor(private authService: AuthService , private router:Router) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
    if (this.authService.getUser()?.email === "" || this.authService.getUser() == undefined) {
      this.router.navigate(['/admin/login'])
    }
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  saveProfile() {
    this.authService.updateUser(this.user);
    this.editMode = false;
  }

}
