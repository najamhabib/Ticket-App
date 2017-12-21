import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  result:any;
  product:Array<any>;

  constructor(private _http: Http) {  }

  getAllProducts() {
    return this._http.get("/api/product")
      .map(result => this.result = result.json().data);
  }

  addProductService(productObj){
    return this._http.post("/api/test",productObj)
    .map(result => this.result = result.json().data);
  }
  

}
