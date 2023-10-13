import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit{
  users: User[] = [];
  
  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response=>{
      console.log(response);
      this.users = response;
    });
  }
}
