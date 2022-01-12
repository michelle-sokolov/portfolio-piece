import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from "./data-table/data-table.component";
import {DetailsComponent} from './details/details.component';

const routes: Routes = [
  { path: 'app-details', component: DetailsComponent },
  { path: 'app-data-table', component: DataTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
