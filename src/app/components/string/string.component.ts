import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stringing } from 'src/app/model/Stringing';
import { StringingService } from 'src/app/service/stringing.service';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css']
})
export class StringComponent {
  id:number = 0;
  string:Stringing = {
    id: 0,
    player: '',
    racket: '',
    tension: 0,
    string: '',
    stringType: '',
    paid: '',
    date_added: '',
    done: '',
    status: '',
    comment: ''
  }

  constructor(private route:ActivatedRoute, private stringingService:StringingService, private router:Router) {
    this.route.params.subscribe(params=>{
      this.id=params['id'];
      this.stringingService.getString(this.id).subscribe(response=>{
        this.string=response;
      });
    });
  };

  goToHome() {
    this.router.navigate(['/']);
  }

  updateString(string:Stringing) {
    this.id = this.string.id;
    this.stringingService.updateString(this.string).subscribe(response=>{
      alert(`The stringing Service # ${this.string.id} has been updated`);
      this.router.navigate(['/stringing']);
    });
  }

  deleteString() {
    this.stringingService.deleteString(this.id).subscribe(response=>{
      alert(`The stringing Service # ${this.id} has been deleted`);
      this.router.navigate(['/stringing']);
    });
  }
}
