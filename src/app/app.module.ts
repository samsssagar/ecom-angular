import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from 'src/guards/auth.guard';
import { CoreModule } from './components/core/core.module';
import { CheckoutModule } from './components/screens/checkout/checkout.module';
import { HomeModule } from './components/screens/home/home.module';
import { LoginModule } from './components/screens/login/login.module';
import { ProductDetailModule } from './components/screens/product-detail/product-detail.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from './components/screens/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CoreModule,
    HomeModule,
    CheckoutModule,
    LoginModule,
    ProductDetailModule,
    NavbarModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
