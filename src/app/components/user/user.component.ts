import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  id:number = 0;
  user:User ={
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    isAdmin: false,
    mailing: false,
    isBoard: false,
    phone: '',
    Season2022: false,
    provider: '',
    grouptext: false,
    superadmin: false,
    date: ''
  };

  constructor (private route:ActivatedRoute, private userService:UserService, private router:Router){
    this.route.params.subscribe(params=>{
      this.id=params['id'];
      this.userService.getUser(this.id).subscribe(response=>{
        this.user=response;
      });
    });
  }

  deleteUser() {
    this.userService.deleteUser(this.id).subscribe(response=>{
      alert(`User ${this.user.firstname} has been deleted`);
      this.router.navigate(['/users']);
    });
  }

  updateUser(user: User) {
    this.id = this.user.id;
    this.userService.updateUser(this.user).subscribe(response=>{
      alert(`User ${this.user.firstname} has been updated`);
      this.router.navigate(['/users']);
    });
  }

  goToHome(){
    this.router.navigate(['/'])
  }
}
