import { Component,OnInit,Input } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from './user';
import {FormsModule} from '@angular/forms';

@Component({

  selector: 'users',
  templateUrl:'app/components/users/user.component.html',
  providers:[UserService]
})

export class UsersComponent implements OnInit{ 
  users: User[];
    name: string;
    username:string;
    email_address: string;
    password:string;
    number:string;

     constructor(private service:UserService){}


     ngOnInit(){
        this.getData();
    }
       
    getData(){
        this.service.getUsers()
        .subscribe(users => {
            this.users = users;
        });
    }

    addUser($event){
       
      var newUser ={
          name: this.name,
          user_name:this.username,
          email_address:this.email_address,
          password:this.password,
          number:this.number
 
      }
      console.log("TEST");
      console.log(newUser);
      this.service.adduser(newUser).subscribe(user=>{

          this.users.push(user);
          this.name ='';
          this.username ='';
          this.email_address ='';
          this.password ='';
          this.number ='';
           this.number ='';

      });

    }
    // @Input() getname:string;
    // @Input() getusername;
    // @Input() getemail;
    // @Input() getnumber;
    //  @Input() getpass;

    // updateUser(users){

    //   console.log(users);

    //     var user = {
    //         _id:users._id,
    //         name: users.name,
    //         user_name:users.username,
    //         email_address:users.emailaddress,
    //         password:users.password,
    //         number:users.number
    //     };
    //     this.getname=users.name;
    //     this.getusername=users.user_name;
    //     this.getemail=users.email_address;
    //     this.getnumber=users.number;
    //     this.getpass=users.password;
        
    //     this.service.updateUser(user).subscribe(data => {console.log(data)});
    // }

      deleteUser(id){
        var users = this.users;
        var _id:any;
        this.service.deleteUser(id).subscribe(data => {console.log("Deleted"+data)});
    }
  
}