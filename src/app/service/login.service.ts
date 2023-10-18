import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string = 'https://gbcncapiapp-6ec49b6d7c40.herokuapp.com/login';

  constructor(private http:HttpClient) { }

  getLogin(email:string):Observable<User> {
    return this.http.get<User>(this.url + '/' + email);
  }

  createLogin(user:User):Observable<User>{
    return this.http.post<User>(this.url, user);
  }
}
