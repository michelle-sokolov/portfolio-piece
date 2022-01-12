import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionType } from "@swimlane/ngx-datatable";
import * as locations_data from '../locations.json';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  public rows = Object.values(locations_data);
  public selected = [];
  public SelectionType = SelectionType;
  public columns = [
    { name: 'City', prop: 'location_city' },
    { name: 'Country', prop: 'location_country' },
    { name: 'Trip Duration', prop: 'days' },
    { name: 'Price', prop: 'price' },
  ];

  onSave(row){    
    console.log(row);    
  }  
  onSelect({ selected }) {
    console.log('Select Event', selected);
    console.log(selected[0].id)
  }  
ngOnInit() {
}
constructor() { 
  console.log(this.rows)
  console.log(Object.values(locations_data)) 
}

onUserEvent() {
  console.log();
} 
}
