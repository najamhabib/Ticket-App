import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Http,Response,Headers } from '@angular/http';
//import { Response } from '_debugger';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  AllProducts: Array<any>;
  AddProduct:boolean;
  ShowProduct:boolean;
  productObj:object={};
  
 
    // Create an instance of the DataService through dependency injection
    constructor(private _dataService: DataService) {}
  
     

      // Access the Data Service's getUsers() method we defined
      // this._dataService.getAllProducts()
      //     .subscribe(res => this.AllProducts = res);
      // this.ShowProduct=true;

     

      // this._dataService.addNewProduct(this.product).subscribe(res => this.AllProducts=res);
    //   {
    //     
    //     this.http.post("/tests",this.productObj).subscribe(
    //       (res:Response)=>{
    //         console.log(res);
    //       }
    //     )
    // }


     

     ngOnInit() {
      this.getProducts();
    }

    AddProductEvent() {
      
    this.AddProduct=true;
    this.ShowProduct=false;
    }

    ShowProductEvent() {
      
    this.AddProduct=false;
    this.ShowProduct=true;
    }


    // addNewProduct(product):void{
    //   this.productObj = 
    //   {
    //     "productTitle": product.productTitle,
    //     "price": product.price,
    //     "actualPrice": product.actualPrice,
    //     "date": product.date,
    //     "stock": product.stock,
    //     "description": product.description,
    //     "venue": product.venue,
    //     "city": product.city,
    //     "country": product.country,
    //     "images": [
    //       product.images
    //     ]
    //   }

    //   this._dataService.addProductService(this.productObj).subscribe(res=>this.productObj=res);

    // }

    addNewProduct=function(productData){
            this.productObj = 
                {
                  "productTitle": productData.productTitle,
                  "price": productData.price,
                  "actualPrice": productData.actualPrice,
                  "date": productData.date,
                  "stock": productData.stock,
                  "description": productData.description,
                  "venue": productData.venue,
                  "city": productData.city,
                  "country": productData.country,
                  "images": [
                    productData.images
                  ]
                }

  // this.http.post("/api/test",this.productObj).subscribe(res=>this.productObj=res);
  this._dataService.addProductService(this.productObj).subscribe(res=>this.productObj=res);
  this.ShowProductEvent();
    }
 
  
  
    getProducts(): void {
      this._dataService.getAllProducts()
          .subscribe(res => this.AllProducts = res);
          this.ShowProduct=true;
    }


   
    private http:Http;

    testfun(productObj)
    {
      console.log('submitted');
    }


    
}
