import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './core/components/home/home.component';
import { AuthGuard } from './core/guard/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './core/components/register/register.component';

const routes: Routes = [
  {
    path:'' , component:HomeComponent , canActivate:[AuthGuard] , data:['user']
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'register' , component : RegisterComponent
  },
  {
    path:'user' , loadChildren:()=>import('./user/user.module').then(m=>m.UserModule) , component:UserComponent
  },
  {
    path:'admin' , loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule) , component:AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
