import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shuttle } from 'src/app/model/Shuttle';
import { ShuttlesService } from 'src/app/service/shuttles.service';

@Component({
  selector: 'app-shuttle',
  templateUrl: './shuttle.component.html',
  styleUrls: ['./shuttle.component.css']
})
export class ShuttleComponent {
  id:number=0;
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

  constructor(private route:ActivatedRoute, private shuttleService:ShuttlesService, private router:Router) {
    this.route.params.subscribe(params=>{
      this.id = params['id'];
      this.shuttleService.getShuttle(this.id).subscribe(response=>{
        console.log(response);
        this.shuttle = response;
      })
    })
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  updateShuttle(shuttle:Shuttle) {
    this.id = this.shuttle.id;
    this.shuttleService.updateShuttle(this.shuttle).subscribe(response=>{
      alert(`The date for # ${this.shuttle.id} has been updated`);
      this.router.navigate(['/shuttles']);
    })
  }

  deleteShuttle() {
    this.shuttleService.deleteShuttle(this.id).subscribe(response=>{
      alert(`The data for # ${this.id} has been deleted`);
      this.router.navigate(['/shuttles']);
    })
  }  
}
