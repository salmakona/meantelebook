import {Component,Input, OnChanges} from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'home',
    templateUrl:'app/components/home/home.html'
})
export class HomeComponent implements OnChanges{

    signupFrom: FormGroup;
    states:any[] = ['CA', 'MD', 'OH', 'VA'];
    city:any[] = ['DHK','CHI','KHU'];
    

  constructor(private fb: FormBuilder) {
    this.createForm();
  }



  createForm() {
      this.signupFrom = this.fb.group({
          name: ['', Validators.required ],
          email: '',
          city: '',
          state: '',
          zip: '',
          gn: '',
          term_condition: ''
      });
  }

    ngOnChanges() {
        this.signupFrom.reset({});
    }

    onSubmit() {
        const formModel = this.signupFrom.value;
        console.log(formModel);
        console.log(formModel.name);
        this.ngOnChanges();
    }


}
