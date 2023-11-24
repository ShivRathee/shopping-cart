import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartPageComponent } from './component/cart/cart.component';
import { OrderPageComponent } from './component/order-page/order-page.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductViewComponent } from './component/product-view/product-view.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'product-detail/:productid', component: ProductDetailComponent },
  { path: 'product-view', component: ProductViewComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'order-page', component: OrderPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
