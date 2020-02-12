import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from'@angular/common/http'
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {StorageComponent} from'./ComStorage/Storage.component'
// import { AppRoutingModule } from './app-routing.module';
// import { SanPhamComponent } from './san-pham/san-pham.component';
// import { DangKyComponent } from './dang-ky/dang-ky.component';
// import { from } from 'rxjs';
// import { DemoComponent } from './demo/demo.component';
// import { Demo2Component } from './demo2/demo2.component';
import {AppRoutingModule} from './app-routing.module'
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    StorageComponent
    // SanPhamComponent,
    // DangKyComponent,
    // DemoComponent,
    // Demo2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
