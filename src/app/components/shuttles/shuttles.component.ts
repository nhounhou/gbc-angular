import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shuttle } from 'src/app/model/Shuttle';
import { ShuttlesService } from 'src/app/service/shuttles.service';

@Component({
  selector: 'app-shuttles',
  templateUrl: './shuttles.component.html',
  styleUrls: ['./shuttles.component.css']
})
export class ShuttlesComponent implements OnInit{
  shuttle:Shuttle[] = [];

  constructor(private shuttleService:ShuttlesService, private router:Router) {}

  ngOnInit(): void {
    this.shuttleService.getShuttles().subscribe(response=>{
      this.shuttle = response;
    });
  }

  createShuttle() {
    this.router.navigate(['/shuttles/new']);
  }

}
