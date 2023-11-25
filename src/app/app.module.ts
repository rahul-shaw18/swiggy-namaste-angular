import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NoPageComponent } from './no-page/no-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { RestaurantMenuItemsComponent } from './restaurant-menu-items/restaurant-menu-items.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestaurantComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    NoPageComponent,
    RestaurantMenuComponent,
    RestaurantMenuItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
