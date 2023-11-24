import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css'],
})
export class OrderPageComponent implements OnInit {
  public finalamount: number = 0;
  public totalamount: number = 0;
  public userdata: any;
  public username: any;
  constructor(private api: ApiService, private router: Router) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/product-view']);
      this.api.removeallitems();
    }, 4000);

    this.totalamount = this.api.calculateprice();

    this.finalamount = this.api.recievefinalamount();
    //alert(this.data)

    let localdata = localStorage.getItem('ecomdata');
    this.userdata = localdata;
    this.username = JSON.parse(this.userdata);
  }
}
