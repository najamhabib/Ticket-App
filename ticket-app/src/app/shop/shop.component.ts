import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent  {

  AllProducts: Array<any>;
  
    // Create an instance of the DataService through dependency injection
    constructor(private _dataService: DataService) {
  
      // Access the Data Service's getUsers() method we defined
      this._dataService.getAllProducts()
          .subscribe(res => this.AllProducts = res);
    }

}
