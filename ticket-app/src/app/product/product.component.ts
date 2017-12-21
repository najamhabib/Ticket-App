import { Component, OnInit } from '@angular/core';
// Import the DataService
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  product: Array<any>;
  
    // Create an instance of the DataService through dependency injection
    constructor(private _dataService: DataService) {
  
      // Access the Data Service's getUsers() method we defined
      this._dataService.getProduct()
          .subscribe(res => this.product = res);
    }


}
