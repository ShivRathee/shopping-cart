import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { OrderPageComponent } from './component/order-page/order-page.component';
import { CartPageComponent } from './component/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    CartPageComponent,
    ProductDetailComponent,
    ProductViewComponent,
    OrderPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
