import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Stringing } from 'src/app/model/Stringing';
import { StringingService } from 'src/app/service/stringing.service';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-stringnew',
  templateUrl: './stringnew.component.html',
  styleUrls: ['./stringnew.component.css'],
})
export class StringnewComponent {
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
    status: 'Receive',
    comment: ''
  }

  constructor(private stringService:StringingService, private router:Router){}

  createString(string:String) {
    this.stringService.createString(this.string).subscribe(response=>{
      // alert(`The stringing Service has been updated`);
      this.router.navigate(['stringing']);
    })
  }
}
