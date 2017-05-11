import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "RxJS/Rx";

@Injectable()
export class UserService{
    constructor(private http:Http){
       // console.log('User Service Initialized...');
    }
    
    getUsers(){
        return this.http.get('/api/users')
            .map(res => res.json());
    }
    
    adduser(newUser:any){
        console.log(newUser);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/user', JSON.stringify(newUser), {headers: headers})
            .map(res => res.json());
    }
    
    deleteUser(id:any){
        return this.http.delete('/api/user/'+id).map(res => res.json());
    }
    
    updateUser(user:any){
       
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/user/'+user._id, JSON.stringify(user), {headers: headers})
            .map(res => res.json());
    }

    getUserbyId(id:any):Observable<any>{
        return this.http.get('/api/user/'+id).map(res => res.json());

    }

    login(formModel:any){
        console.log("Salma");
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/login', JSON.stringify(formModel), {headers: headers})
         .map(res => res.json());
    }


}