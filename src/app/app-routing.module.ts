import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/guards/auth.guard';
import { HomeComponent } from './components/screens/home/home.component';
import { LoginComponent } from './components/screens/login/login.component';
import { CheckoutComponent } from './components/screens/checkout/checkout.component';
import { ComingSoonComponent } from './components/core/coming-soon/coming-soon.component';
import { NotFoundComponent } from './components/core/not-found/not-found.component';
import { ProductDetailComponent } from './components/screens/product-detail/product-detail.component';
import { ForbiddenComponent } from './components/core/forbidden/forbidden.component';
import { EmptyItemGuard } from 'src/guards/empty-item.guard';
import { CartEmptyErrorComponent } from './components/core/cart-empty-error/cart-empty-error.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: HomeComponent,
    children: [
      {
        path: 'product-detail',
        component: ProductDetailComponent
      }
    ]
  },
  {
    path: 'checkout/:productid',
    component: CheckoutComponent,
    canActivate: [EmptyItemGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '403',
    component: ForbiddenComponent
  },
  {
    path: 'coming-soon',
    component: ComingSoonComponent
  },
  {
    path: 'empty-cart',
    component: CartEmptyErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
