import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFilter } from './product-list/product-list-filter-pipe';
import { StarComponent } from './star.component';
import { ProductService } from './product.service';
import { RouterModule } from '@angular/router';
import { PageNotfoundComponent } from './page-notfound.component';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilter,
    StarComponent,
    PageNotfoundComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: '', component: WelcomeComponent },
      { path: '**', component: PageNotfoundComponent }
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
