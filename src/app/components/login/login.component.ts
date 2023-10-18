import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  

  constructor(private loginService:LoginService, private router:Router){}

  loginUser(login:{email:string, password:string}) {
    this.loginService.getLogin(login.email).subscribe(response=>{
      console.log(response);
      // this.router.navigate(['/home']);
    })
  }
}
