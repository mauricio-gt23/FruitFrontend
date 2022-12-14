import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { MainRoutingModule } from './main-routing.module';
import { HomeAdminComponent } from './pages/admin/home/homeadmin.component';
import { HomeClientComponent } from './pages/client/home/homeclient.component';
import { MainComponent } from './pages/main/main.component';
import { SwiperModule } from 'swiper/angular';
import { CommonModule } from '@angular/common';
import { FruitComponent } from './pages/client/fruit/fruit.component';
import { JuiceComponent } from './pages/client/juice/juice.component';
import { OrderComponent } from './pages/client/order/order.component';
import { BuyComponent } from './pages/client/buy/buy.component';
import { SaleComponent } from './pages/admin/sale/sale.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FruitInputComponent } from './components/shared/fruit-input.component';
import { CountPipe } from './pipes/count.pipe';
import { ProductComponent } from './components/product/product.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';


@NgModule({
  declarations: [
    BuyComponent,
    FruitComponent,
    FruitInputComponent,
    HomeAdminComponent,
    HomeClientComponent,
    JuiceComponent,
    MainComponent,
    OrderComponent,
    ProductComponent,
    SaleComponent,
    SnackbarComponent,

    CountPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SwiperModule,
  ],
})
export class MainModule { }