import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StickyNavModule } from 'ng2-sticky-nav';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './sections/footer/footer.component';
import { HeaderComponent } from './sections/header/header.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { OrderComponent } from './pages/order/order.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ArrivalComponent } from './pages/home/section/arrival/arrival.component';
import { BannersComponent } from './pages/home/section/banners/banners.component';
import { AcollectionsComponent } from './pages/home/section/acollections/acollections.component';
import { HowComponent } from './pages/order/section/how/how.component';
import { BannercollectionComponent } from './pages/collections/section/bannercollection/bannercollection.component';
import { AcollectioninComponent } from './pages/collections/section/acollectionin/acollectionin.component';
import { BanneraboutComponent } from './pages/about/section/bannerabout/bannerabout.component';
import { BeleafComponent } from './pages/about/section/beleaf/beleaf.component';
import { HijabpeopleComponent } from './pages/about/section/hijabpeople/hijabpeople.component';
import { VisionComponent } from './pages/about/section/vision/vision.component';
import { BeleafersreviewComponent } from './pages/about/section/beleafersreview/beleafersreview.component';
import { Product1Component } from './product/product1/product1.component';
import { Product2Component } from './product/product2/product2.component';
import { Product3Component } from './product/product3/product3.component';
import { Bannerproduct1Component } from './product/product1/section/bannerproduct1/bannerproduct1.component';
import { CheckoutComponent } from './product/checkout/checkout.component';
import { CheckoutformComponent } from './product/checkout/section/checkoutform/checkoutform.component';
import { Allproduct1Component } from './product/product1/section/allproduct1/allproduct1.component';
import { Bannerproduct2Component } from './product/product2/section/bannerproduct2/bannerproduct2.component';
import { Allproduct2Component } from './product/product2/section/allproduct2/allproduct2.component';
import { Bannerproduct3Component } from './product/product3/section/bannerproduct3/bannerproduct3.component';
import { Allproduct3Component } from './product/product3/section/allproduct3/allproduct3.component';
import { Product4Component } from './product/product4/product4.component';
import { Bannerproduct4Component } from './product/product4/section/bannerproduct4/bannerproduct4.component';
import { Allproduct4Component } from './product/product4/section/allproduct4/allproduct4.component';
import { ProductdetailComponent } from './product/productdetail/productdetail.component';
import { DetailsComponent } from './product/productdetail/section/details/details.component';
import { PurchasenowComponent } from './product/checkout/section/purchasenow/purchasenow.component';
import { BagdetailsComponent } from './product/productdetail/section/bagdetails/bagdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CollectionsComponent,
    OrderComponent,
    AboutComponent,
    HomeComponent,
    ArrivalComponent,
    BannersComponent,
    AcollectionsComponent,
    HowComponent,
    BannercollectionComponent,
    AcollectioninComponent,
    BanneraboutComponent,
    BeleafComponent,
    HijabpeopleComponent,
    VisionComponent,
    BeleafersreviewComponent,
    Product1Component,
    Product2Component,
    Product3Component,
    Bannerproduct1Component,
    CheckoutComponent,
    CheckoutformComponent,
    Allproduct1Component,
    Bannerproduct2Component,
    Allproduct2Component,
    Bannerproduct3Component,
    Allproduct3Component,
    Product4Component,
    Bannerproduct4Component,
    Allproduct4Component,
    ProductdetailComponent,
    DetailsComponent,
    PurchasenowComponent,
    BagdetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    StickyNavModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
