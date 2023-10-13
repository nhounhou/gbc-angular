import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string = 'https://gbcncapiapp-6ec49b6d7c40.herokuapp.com/users';
  // url:string = '/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    // console.log(this.http.get<User[]>(this.url));
    return this.http.get<User[]>(this.url);
  }

  getUser(id:number):Observable<User> {
    return this.http.get<User>(this.url + '/' + id);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  deleteUser(id:number) {
    return this.http.delete(this.url + '/' + id);
  }

  updateUser(user: User) {
    return this.http.put(this.url + '/' + user.id, user);
  }
}
