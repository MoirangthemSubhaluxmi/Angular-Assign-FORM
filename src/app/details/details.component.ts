import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // fullName='';
  // mail = '';
  // password = '';
  // mobileNumber = '';
  // cityName = '';
  // relation = '';
  // name = '';
  constructor(public data:DataService, private router : Router) { }

  ngOnInit(): void {
  }
  goBack(){
    this.router.navigate(['get-data']);
  }
}
