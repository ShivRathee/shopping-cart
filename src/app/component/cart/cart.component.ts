import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { product } from '../product-view/productmodal';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartPageComponent implements OnInit {
  showproduct: any = [];
  public totalamount: number = 0;
  public taxamount: number = 0;
  public finalamount: number = 0;
  public addressform = false;
  public sentamount: number = 0;
  myform!: FormGroup;
  constructor(private api: ApiService, public router: Router) {}
  ngOnInit(): void {
    this.api.products().subscribe((res) => {
      this.showproduct = res;
      this.totalamount = this.api.calculateprice();
      console.log('total amt is', this.totalamount);
      this.taxamount = (this.totalamount / 100) * 15;
      console.log(this.taxamount, 'is tax amount');

      this.finalamount = this.taxamount + this.totalamount;
      this.sentamount = this.finalamount;
      this.api.sendfinalamount(this.sentamount);
    });
    this.myform = new FormGroup({
      email: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    });
  }
  deleteitem(item: product) {
    this.api.removecartitem(item);
  }
  Empty() {
    this.api.removeallitems();
  }
  cancel() {
    this.addressform = false;
    this.myform.reset();
    localStorage.removeItem('ecomdata');
  }
  onsubmit() {
    this.myform.value;
    console.log(this.myform.value);
    localStorage.setItem('ecomdata', JSON.stringify(this.myform.value.name));
    this.router.navigate(['/order-page']);
    //this.myform.reset();
  }
  onlinepay() {
    localStorage.setItem('ecomdata', JSON.stringify(this.myform.value.name));
  }
}
