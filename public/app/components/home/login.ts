import {Component,OnInit} from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import { Http, Response }          from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'login',
    templateUrl:'app/components/home/login.html',
      providers:[UserService]
})
export class LoginComponent {

        signupFrom: FormGroup;
        constructor(private fb: FormBuilder,private service:UserService) {
            this.createForm();
        }
        createForm() {
            this.signupFrom = this.fb.group({
                user_name: ['', Validators.required ],
                password: ['', Validators.required ]
            });
        }
        ngOnChanges() {
            this.signupFrom.reset({});
        }

        onSubmit() {
            const formModel = this.signupFrom.value;
            console.log(formModel);
            this.ngOnChanges();
            this.service.login(formModel);
        }

}
