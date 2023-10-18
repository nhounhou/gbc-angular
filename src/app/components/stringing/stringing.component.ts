import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stringing } from 'src/app/model/Stringing';
import { StringingService } from 'src/app/service/stringing.service';

@Component({
  selector: 'app-stringing',
  templateUrl: './stringing.component.html',
  styleUrls: ['./stringing.component.css']
})
export class StringingComponent implements OnInit{
  strings:Stringing[] = [];
  displayed:boolean = false;
  today = new Date;
  // headers = ['id','player', 'racket', 'tension', 'string', 'stringType', 'paid', 'date_added', 'done', 'status', 'comment'];
  sizeReceived:number=0;
  sizeStrung:number=0;
  sizeReleased:number=0;
  sizeHistory:number=0;

  constructor(private stringingService:StringingService, private router:Router){
    this.stringingService.getStrings().subscribe(response=>{
      for(let i=0;i<response.length;i++){
        switch (response[i].status) {
          case 'Receive':
            this.sizeReceived++;
            break;
          case 'Strung':
            this.sizeStrung++;
            break;
          case 'Released':
            if (response[i].paid==='N') {
              this.sizeReleased ++;
            }
            break;
          default:
            break;
        }
      }
      this.sizeHistory = response.length - (this.sizeReceived+this.sizeStrung+this.sizeReleased);
      this.strings = response;
    });
  }

  ngOnInit(): void {
    // this.stringingService.getStrings().subscribe(response=>{
    //   for(let i=0;i<response.length;i++){
    //     switch (response[i].status) {
    //       case 'Receive':
    //         this.sizeReceived++;
    //         break;
    //       case 'Strung':
    //         this.sizeStrung++;
    //         break;
    //       case 'Released':
    //         if (response[i].paid==='N') {
    //           this.sizeReleased ++;
    //         }
    //         break;
    //       default:
    //         break;
    //     }
    //   }
    //   this.sizeHistory = response.length - (this.sizeReceived+this.sizeStrung+this.sizeReleased);
    //   this.strings = response;
    // });
  }

  createStringing() {
    this.router.navigate(['/stringing/new']);
  }

  payString(string:Stringing){
    string.paid='Y';
    console.log(string);
    this.stringingService.updateString(string).subscribe(response=>{
      // alert(`the stringing service # ${string.id} had been update`);
      this.router.navigate(['/stringing']);
    })
  }

  doneString(string:Stringing){
    string.done = this.today.getFullYear() + '-' + this.today.getMonth()+1 + '-' + this.today.getDate();
    string.status = 'Strung';
    console.log(string);
    this.stringingService.updateString(string).subscribe(response=>{
      // alert(`the stringing service # ${string.id} had been update`);
      this.router.navigate(['/stringing']);
    })
  }

  releaseString(string:Stringing){
    string.status = 'Released';
    console.log(string);
    this.stringingService.updateString(string).subscribe(response=>{
      // alert(`the stringing service # ${string.id} had been update`);
      this.router.navigate(['/stringing']);
    })
  }

  deleteString(id:number) {
    this.stringingService.deleteString(id).subscribe(response=>{
      this.router.navigate(['/stringing']);
    })
  }
}
