import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RightComponent } from './right/right.component';
import { LeftComponent } from './left/left.component';
import { CenterComponent } from './center/center.component';
import { FootComponent } from './foot/foot.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RightComponent,
    LeftComponent,
    CenterComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
