import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shuttle } from '../model/Shuttle';

@Injectable({
  providedIn: 'root'
})
export class ShuttlesService {
  url:string = 'https://gbcncapiapp-6ec49b6d7c40.herokuapp.com/shuttles';

  constructor(private http:HttpClient) { }

  getShuttles():Observable<Shuttle[]> {
    return this.http.get<Shuttle[]>(this.url);
  }

  getShuttle(id:number):Observable<Shuttle> {
    return this.http.get<Shuttle>(this.url + '/' + id);
  }

  createShuttle(shuttle:Shuttle):Observable<Shuttle> {
    return this.http.post<Shuttle>(this.url, shuttle);
  }

  deleteShuttle(id:number) {
    return this.http.delete(this.url + '/' + id);
  }

  updateShuttle(shuttle:Shuttle) {
    return this.http.put(this.url + '/' + shuttle.id, shuttle);
  }
}
