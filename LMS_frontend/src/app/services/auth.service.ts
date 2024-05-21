import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl;

  user: any;
  constructor(private http: HttpClient) {
    // this.user = {
    //   id: '',
    //   name: '',
    //   email: '',
    //   password: '',
    //   role: 'user'
    // }
  }
  // private userSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  // public user$: Observable<any> = this.userSubject.asObservable();
  setUser(user: any) {
    // this.userSubject.next(user);
    this.user = user;
  }
  getUser() {
    return this.user;
  }

  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/user/register`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/user/login`, credentials).pipe(
      tap((response: any) => {
        this.setUser(response.user);
      })
    );;
  }
  updateUser(user: any) {
    return this.http.put<any>(`${this.apiUrl}/user/update`, user).pipe(
      tap((response: any) => {
        this.setUser(response.user);
      })
    );
  }
  
  getAllUsers(){
    return this.http.get<any>(`${this.apiUrl}/user/getAllUsers`)
  }



  logout(): void {
    this.user = null;
  }
}
