import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { TestmenuComponent } from './testmenu/testmenu.component';
import { TestfooterComponent } from './testfooter/testfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    TestmenuComponent,
    TestfooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
