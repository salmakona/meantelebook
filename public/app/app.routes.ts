import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{AppComponent} from './components/app.component';
import {HomeComponent} from "./components/home/home";
import {LoginComponent} from "./components/home/login";
import{NavigationComponent} from './components/navigation/nav';
import{UsersComponent} from './components/users/user.component';
import{ViewUsersComponent} from './components/users/view.user.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent},
  {path: 'viewusers', component: ViewUsersComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}