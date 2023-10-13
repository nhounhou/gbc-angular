import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {

  constructor(private userService:UserService, private router: Router){ }

  createUser(user:User){
    console.log('user for creation');
    console.log(user);
    
    this.userService.createUser(user).subscribe(response=>{
      alert(`User created`);
      this.router.navigate(['/']);
    });
  }
}
