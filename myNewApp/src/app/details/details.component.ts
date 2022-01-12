import { Component, OnInit } from '@angular/core';
import * as locations_data from '../locations.json';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

public details = locations_data;

  constructor() { }

  ngOnInit(): void {
  }

}
