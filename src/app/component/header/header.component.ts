import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { product } from '../product-view/productmodal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public cartitems: number = 0;
  showproduct: any;
  constructor(private api: ApiService, public router: Router) {}
  ngOnInit(): void {
    this.api.products().subscribe((res) => {
      this.cartitems = res.length;
      this.showproduct = res;
    });
  }

  emptycart() {
    this.api.removeallitems();
    this.router.navigate(['/product-view']);
  }
  deleteitem(item: product) {
    this.api.removecartitem(item);
  }
}
