import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from '../component/product-view/productmodal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public cartitemlist: any = [];
  public productlist = new BehaviorSubject<any>([]);
  public amount: number = 0;
  constructor(private http: HttpClient) {}

  getproduct(): Observable<product[]> {
    return this.http.get<product[]>('https://dummyjson.com/products');
  }

  getproductbyid(id: string): Observable<product> {
    return this.http.get<product>('https://dummyjson.com/products/' + id);
  }

  addtocart(data: product) {
    this.cartitemlist.push(data);
    this.productlist.next(this.cartitemlist);
    console.log(this.cartitemlist);
  }

  products() {
    return this.productlist.asObservable();
  }

  removecartitem(data: product) {
    this.cartitemlist.map((a: product, index: product) => {
      if (data.id === a.id) {
        this.cartitemlist.splice(index, 1);
      }
    });
    this.productlist.next(this.cartitemlist);
  }

  calculateprice() {
    let total = 0;
    this.cartitemlist.map((a: any) => {
      total += a.price;
    });
    return total;
  }

  removeallitems() {
    this.cartitemlist = [];
    this.productlist.next(this.cartitemlist);
  }

  sendfinalamount(data: number) {
    this.amount = data;
  }
  recievefinalamount() {
    return this.amount;
  }
}
