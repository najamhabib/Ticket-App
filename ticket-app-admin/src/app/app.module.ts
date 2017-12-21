import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TicketsComponent } from './tickets/tickets.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TicketsComponent,
    HomepageComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'tickets',
        component:TicketsComponent
      },
      {
        path:'product',
        component:ProductComponent
      },
      {
        path:'',
        component:HomepageComponent
      }
    ]) 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
