import { Component, OnInit } from '@angular/core';
import * as locations_data from '../locations.json';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

public details = locations_data;
public currentId;

  constructor() {

   }

  ngOnInit(): void {
    this.getId();
    console.log(this.details[this.currentId])
  }
  getId() {
    this.currentId = window.location.href.slice(34);
  }
}
