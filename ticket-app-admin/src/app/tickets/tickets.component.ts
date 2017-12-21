import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {

  tickets: Array<any>;
  
    // Create an instance of the DataService through dependency injection
    constructor(private _dataService: DataService) {
  
      // Access the Data Service's getUsers() method we defined
      //this._dataService.getProduct().subscribe(res => this.tickets = res);
    }

}
