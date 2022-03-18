import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { HomeComponent } from './pages/home/home.component';
import { OrderComponent } from './pages/order/order.component';
import { CheckoutComponent } from './product/checkout/checkout.component';
import { Product1Component } from './product/product1/product1.component';
import { Product2Component } from './product/product2/product2.component';
import { Product3Component } from './product/product3/product3.component';
import { Product4Component } from './product/product4/product4.component';
import { DetailsComponent } from './product/productdetail/section/details/details.component';
import { ProductdetailComponent } from './product/productdetail/productdetail.component';
import { PurchasenowComponent } from './product/checkout/section/purchasenow/purchasenow.component';
import { BagdetailsComponent } from './product/productdetail/section/bagdetails/bagdetails.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'collections', component: CollectionsComponent},
  {path: 'order', component: OrderComponent},
  {path: 'product1', component: Product1Component},
  {path: 'product2', component: Product2Component},
  {path: 'product3', component: Product3Component},
  {path: 'product4', component: Product4Component},
  {path: 'checkout/:id', component: CheckoutComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'productdetail/:id', component: ProductdetailComponent}, //id path
  {path: 'purchasenow', component: PurchasenowComponent},
  {path: 'bagdetails', component: BagdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
