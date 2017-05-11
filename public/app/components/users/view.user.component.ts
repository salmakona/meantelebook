import { Component,OnInit,Input } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from './user';
import {FormsModule,FormControl, FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Observable} from "RxJS/Rx";
import { ActivatedRoute, Params} from '@angular/router';


@Component({

  selector: 'viewusers',
  templateUrl:'app/components/users/view.user.component.html',
  providers:[UserService]
})

export class ViewUsersComponent implements OnInit{ 
    users: User[];
    name: string;
    username:string;
    emailaddress: string;
    password:string;
    number:string;
    _id:string;
    user:any=[];
    //formModel: FormGroup;

     constructor(private service:UserService,private gf:FormBuilder,private route: ActivatedRoute){

        //   const fb = new FormBuilder();
        //     this.formModel = fb.group({
        //             'name': [null,Validators.required],
        //             'username': [null,Validators.required],
        //             'emailaddress': [null,Validators.required],
        //             'password':'',
        //             'number':''
        //     })
     }


     ngOnInit(){
        this.getData();
    }
       
    getData(){
        this.service.getUsers()
        .subscribe(users => {
            this.users = users;
        });
    }

    
    @Input() getname:string;
    @Input() getusername;
    @Input() getemail;
    @Input() getnumber;
    @Input() getpass;
    submitted = false;
    id:any;
    post:any[]=[];

    open = false; 
    updateUser(users:any){

        this.open=true;
        this.getname=users.name;
        this.getusername=users.user_name;
        this.getemail=users.email_address;
        this.getnumber=users.number;
        this.getpass=users.password;
        this.id = users._id;  
        this.service.getUserbyId(this.id).subscribe(user => {
                        this.user = user;
                });
        }

    EditUser(value:any){

            console.log(value.name);
            var _id:any
            console.log(value.password);
            console.log(value.email_address);
            return this.service.updateUser(value).subscribe(user => {
                console.log("Updateed");
                this.getData();
            });
    
            
    }

    msgdv =false;
    deleteUser(id){

        this.msgdv=true;
        var users = this.users;
        var _id:any;
        this.service.deleteUser(id).subscribe(data => {console.log("Deleted"+data)});
        this.getData();
        
    }


}