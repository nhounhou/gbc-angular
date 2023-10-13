import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stringing } from '../model/Stringing';

@Injectable({
  providedIn: 'root'
})
export class StringingService {
  url:string = 'https://gbcncapiapp-6ec49b6d7c40.herokuapp.com/stringing';

  constructor(private http:HttpClient) { }

  getStrings():Observable<Stringing[]> {
    return this.http.get<Stringing[]>(this.url);
  }

  getString(id:number):Observable<Stringing> {
    return this.http.get<Stringing>(this.url + "/" + id);
  }

  createString(string:Stringing): Observable<Stringing> {
    return this.http.post<Stringing>(this.url, string);
  }

  deleteString(id:number) {
    return this.http.delete(this.url + '/' + id);
  }

  updateString(string:Stringing) {
    return this.http.put(this.url + '/' + string.id, string);
  }
}
