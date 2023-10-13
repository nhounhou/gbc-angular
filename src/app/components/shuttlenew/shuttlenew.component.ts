import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Shuttle } from 'src/app/model/Shuttle';
import { ShuttlesService } from 'src/app/service/shuttles.service';

@Component({
  selector: 'app-shuttlenew',
  templateUrl: './shuttlenew.component.html',
  styleUrls: ['./shuttlenew.component.css']
})
export class ShuttlenewComponent {
  shuttle:Shuttle = {
    id:0,
    firstname:'',
    lastname:'',
    tubesGiven:0,
    dateGiven:'',
    amountPaid:0,
    datePaid:'',
    comment:'',
    date_added:''
  }

  constructor(private shuttleService:ShuttlesService, private router:Router){}

  createShuttle(shuttle:Shuttle) {
    this.shuttleService.createShuttle(this.shuttle).subscribe(response=>{
      alert(`The date for # ${this.shuttle.id} has been created`);
      this.router.navigate(['/shuttles']);
    })
  }
}
