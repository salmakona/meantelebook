import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule,OnInit,Input}      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import{AppRoutingModule} from './app.routes';
import{AppComponent} from './components/app.component';
import {HomeComponent} from './components/home/home';
import{NavigationComponent} from './components/navigation/nav';
import {LoginComponent} from "./components/home/login";
import{UsersComponent} from './components/users/user.component';
import{ViewUsersComponent} from './components/users/view.user.component';




@NgModule({
    imports: [ BrowserModule,AppRoutingModule,ReactiveFormsModule,HttpModule,FormsModule],
    declarations: [AppComponent,HomeComponent,NavigationComponent,LoginComponent,UsersComponent,ViewUsersComponent],
    providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);