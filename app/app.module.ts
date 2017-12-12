import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';
import {ToastyModule} from 'ng2-toasty';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { NavbarComponent } from './nav/nav.component';
import { UserComponent } from './users/user.component';

import { ProductService } from './products/product.service';
import { UserService } from './users/user.service';
import { ToastService } from './toast/toast.service';


@NgModule({
  imports: [ BrowserModule,
                   FormsModule,
                   AppRoutingModule,
                   HttpModule,
                   ToastyModule.forRoot(),
                   ],
  declarations: [ AppComponent,
                          ProductComponent,
                          NavbarComponent,
                          UserComponent,
                          ],
  providers: [ ProductService, UserService, ToastService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }